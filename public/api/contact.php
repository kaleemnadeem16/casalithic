<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

const MAX_BODY_BYTES = 20000;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 900;
const RECIPIENTS = [
    'techtidekaleem@gmail.com',
    'sales@casalithic.com',
    'info@casalithic.com',
];

function respond(int $status, string $message): void
{
    http_response_code($status);
    echo json_encode(['message' => $message], JSON_UNESCAPED_SLASHES);
    exit;
}

function field(array $payload, string $key, int $maximum): string
{
    if (!isset($payload[$key]) || !is_string($payload[$key])) {
        return '';
    }

    $value = trim($payload[$key]);
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maximum, 'UTF-8');
    }

    return substr($value, 0, $maximum);
}

function client_ip(): string
{
    if (!empty($_SERVER['HTTP_CF_CONNECTING_IP'])) {
        return (string) $_SERVER['HTTP_CF_CONNECTING_IP'];
    }

    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        return trim(explode(',', (string) $_SERVER['HTTP_X_FORWARDED_FOR'])[0]);
    }

    return (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
}

function rate_limit_exceeded(): bool
{
    $path = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR)
        . DIRECTORY_SEPARATOR
        . 'casalithic-contact-'
        . hash('sha256', client_ip())
        . '.json';
    $handle = @fopen($path, 'c+');

    // Do not break legitimate enquiries if this host disallows temporary files.
    if ($handle === false || !flock($handle, LOCK_EX)) {
        if (is_resource($handle)) {
            fclose($handle);
        }
        return false;
    }

    $raw = stream_get_contents($handle);
    $data = is_string($raw) && $raw !== '' ? json_decode($raw, true) : null;
    $now = time();

    if (!is_array($data) || !isset($data['startedAt'], $data['count']) || $now - (int) $data['startedAt'] > RATE_LIMIT_WINDOW) {
        $data = ['startedAt' => $now, 'count' => 0];
    }

    $limited = (int) $data['count'] >= RATE_LIMIT_MAX;
    if (!$limited) {
        $data['count'] = (int) $data['count'] + 1;
        rewind($handle);
        ftruncate($handle, 0);
        fwrite($handle, json_encode($data));
        fflush($handle);
    }

    flock($handle, LOCK_UN);
    fclose($handle);
    return $limited;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, 'Method not allowed.');
}

$contentType = (string) ($_SERVER['CONTENT_TYPE'] ?? '');
if (stripos($contentType, 'application/json') === false) {
    respond(415, 'Content type must be application/json.');
}

$origin = (string) ($_SERVER['HTTP_ORIGIN'] ?? '');
if ($origin !== '') {
    $originHost = strtolower((string) parse_url($origin, PHP_URL_HOST));
    $serverHost = strtolower(explode(':', (string) ($_SERVER['HTTP_HOST'] ?? ''))[0]);
    if ($originHost === '' || $serverHost === '' || $originHost !== $serverHost) {
        respond(403, 'Cross-site submissions are not allowed.');
    }
}

$declaredLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($declaredLength > MAX_BODY_BYTES) {
    respond(413, 'Request body is too large.');
}

$rawBody = file_get_contents('php://input');
if (!is_string($rawBody) || strlen($rawBody) > MAX_BODY_BYTES) {
    respond(413, 'Request body is too large.');
}

$payload = json_decode($rawBody, true);
if (!is_array($payload)) {
    respond(400, 'Invalid JSON body.');
}

// Honeypot: silently accept automated submissions without sending an email.
if (field($payload, 'website', 200) !== '') {
    respond(200, 'Thank you. Your enquiry has been received.');
}

$name = field($payload, 'name', 120);
$email = strtolower(field($payload, 'email', 180));
$location = field($payload, 'location', 180);
$projectType = preg_replace('/[\r\n]+/', ' ', field($payload, 'projectType', 120));
$collection = field($payload, 'collection', 160);
$message = field($payload, 'message', 4000);

if (strlen($name) < 2) {
    respond(400, 'Please provide your name.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, 'Please provide a valid email address.');
}

if ($projectType === '') {
    respond(400, 'Please select a project type.');
}

if (strlen($message) < 10) {
    respond(400, 'Please tell us a little more about your project.');
}

if (rate_limit_exceeded()) {
    respond(429, 'Too many enquiries. Please try again a little later.');
}

$safe = static function (string $value): string {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
};

$subject = 'Casa Lithic project enquiry - ' . $projectType;
$html = '<h2>New Casa Lithic project enquiry</h2>'
    . '<p><strong>Name:</strong> ' . $safe($name) . '</p>'
    . '<p><strong>Email:</strong> ' . $safe($email) . '</p>'
    . '<p><strong>Location:</strong> ' . $safe($location !== '' ? $location : 'Not specified') . '</p>'
    . '<p><strong>Project type:</strong> ' . $safe($projectType) . '</p>'
    . '<p><strong>Preferred collection:</strong> ' . $safe($collection !== '' ? $collection : 'Not specified') . '</p>'
    . '<h3>Project vision</h3>'
    . '<p>' . nl2br($safe($message)) . '</p>';

$fromEmail = getenv('CONTACT_FROM_EMAIL') ?: 'sales@casalithic.com';
if (!filter_var($fromEmail, FILTER_VALIDATE_EMAIL)) {
    $fromEmail = 'sales@casalithic.com';
}

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: Casa Lithic Website <' . $fromEmail . '>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . PHP_VERSION,
];

$sent = mail(
    implode(', ', RECIPIENTS),
    $subject,
    $html,
    implode("\r\n", $headers)
);

if (!$sent) {
    error_log('Casa Lithic contact form: PHP mail() returned false.');
    respond(500, 'We could not send your enquiry right now. Please try again or email us directly.');
}

respond(200, 'Thank you. Your enquiry has been received.');
