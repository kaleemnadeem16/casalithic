import "dotenv/config";
import nodemailer from "nodemailer";

const RECIPIENTS = [
  "techtidekaleem@gmail.com",
  "sales@casalithic.com",
  "info@casalithic.com",
];

const MAX_BODY_BYTES = 20_000;
const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimits = new Map();

let transporter;

function sendJson(response, status, payload) {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(payload));
}

function getClientIp(request) {
  const forwarded = request.headers["x-forwarded-for"];
  if (typeof forwarded === "string") return forwarded.split(",")[0].trim();
  return request.socket?.remoteAddress || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const existing = rateLimits.get(ip);

  if (!existing || now - existing.startedAt > RATE_LIMIT_WINDOW) {
    rateLimits.set(ip, { startedAt: now, count: 1 });
    return false;
  }

  existing.count += 1;
  return existing.count > RATE_LIMIT_MAX;
}

async function readJsonBody(request) {
  const chunks = [];
  let size = 0;

  for await (const chunk of request) {
    size += chunk.length;
    if (size > MAX_BODY_BYTES) {
      const error = new Error("Request body is too large.");
      error.statusCode = 413;
      throw error;
    }
    chunks.push(chunk);
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    const error = new Error("Invalid JSON body.");
    error.statusCode = 400;
    throw error;
  }
}

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function validateSubmission(payload) {
  const submission = {
    name: clean(payload.name, 120),
    email: clean(payload.email, 180).toLowerCase(),
    location: clean(payload.location, 180),
    projectType: clean(payload.projectType, 120),
    collection: clean(payload.collection, 160),
    message: clean(payload.message, 4_000),
    website: clean(payload.website, 200),
  };

  if (submission.website) return { submission, isSpam: true };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (submission.name.length < 2) throw new Error("Please provide your name.");
  if (!emailPattern.test(submission.email)) throw new Error("Please provide a valid email address.");
  if (!submission.projectType) throw new Error("Please select a project type.");
  if (submission.message.length < 10) throw new Error("Please tell us a little more about your project.");

  return { submission, isSpam: false };
}

function getTransporter() {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    const error = new Error("Email service is not configured.");
    error.statusCode = 503;
    throw error;
  }

  const port = Number(SMTP_PORT || 587);
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE === "true" || port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  return transporter;
}

export async function handleContactRequest(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    sendJson(response, 405, { message: "Method not allowed." });
    return;
  }

  if (!request.headers["content-type"]?.includes("application/json")) {
    sendJson(response, 415, { message: "Content type must be application/json." });
    return;
  }

  const fetchSite = request.headers["sec-fetch-site"];
  if (fetchSite && !["same-origin", "same-site", "none"].includes(fetchSite)) {
    sendJson(response, 403, { message: "Cross-site submissions are not allowed." });
    return;
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    sendJson(response, 429, { message: "Too many enquiries. Please try again a little later." });
    return;
  }

  try {
    const payload = await readJsonBody(request);
    const { submission, isSpam } = validateSubmission(payload);

    // Silently accept honeypot submissions so automated senders receive no useful signal.
    if (isSpam) {
      sendJson(response, 200, { message: "Thank you. Your enquiry has been received." });
      return;
    }

    const safe = Object.fromEntries(
      Object.entries(submission).map(([key, value]) => [key, escapeHtml(value)])
    );
    const transport = getTransporter();
    const from = process.env.MAIL_FROM || `Casa Lithic Website <${process.env.SMTP_USER}>`;

    await transport.sendMail({
      from,
      to: RECIPIENTS,
      replyTo: submission.email,
      subject: `Casa Lithic project enquiry — ${submission.projectType.replace(/[\r\n]+/g, " ")}`,
      text: [
        `Name: ${submission.name}`,
        `Email: ${submission.email}`,
        `Location: ${submission.location || "Not specified"}`,
        `Project type: ${submission.projectType}`,
        `Preferred collection: ${submission.collection || "Not specified"}`,
        "",
        "Project vision:",
        submission.message,
      ].join("\n"),
      html: `
        <h2>New Casa Lithic project enquiry</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Location:</strong> ${safe.location || "Not specified"}</p>
        <p><strong>Project type:</strong> ${safe.projectType}</p>
        <p><strong>Preferred collection:</strong> ${safe.collection || "Not specified"}</p>
        <h3>Project vision</h3>
        <p>${safe.message.replaceAll("\n", "<br>")}</p>
      `,
    });

    sendJson(response, 200, { message: "Thank you. Your enquiry has been received." });
  } catch (error) {
    const status = error.statusCode || (error.message.startsWith("Please") ? 400 : 500);
    if (status >= 500) console.error("Contact email error:", error);
    sendJson(response, status, {
      message: status >= 500
        ? "We could not send your enquiry right now. Please try again or email us directly."
        : error.message,
    });
  }
}
