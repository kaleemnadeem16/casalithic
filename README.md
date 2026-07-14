# Casa Lithic

Luxury interior and lifestyle website for Casa Lithic, built with React, Vite, GSAP, and Lenis.

## Tech Stack

- React
- Vite
- GSAP
- Lenis smooth scrolling

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

The build regenerates `public/sitemap.xml` with Italian and English URLs before
Vite creates the production bundle.

## Image Optimization

All content photography in `src/assets` uses WebP. To convert newly added JPG,
JPEG, or PNG content images and automatically update JSX/CSS references:

```bash
npm run images:webp
```

This keeps the originals for review. After confirming the WebP output, remove
the original content files with:

```bash
npm run images:webp:clean
```

The converter uses WebP quality 82 by default. A custom quality or forced
reconversion can be run directly:

```bash
node scripts/convert-images-to-webp.mjs --quality=86 --force
```

PNG favicon and Apple touch icon files in `public/` remain PNG because those are
platform interface assets rather than content photography.

## SEO and Languages

- Italian is the default language on unprefixed URLs.
- English pages use `/en/...` and can be opened directly.
- Every route has localized titles, descriptions, canonical URLs, alternate
  language links, Open Graph/Twitter metadata, and JSON-LD structured data.
- `public/robots.txt` references the automatically generated bilingual sitemap.
- Run `npm run seo:sitemap` to regenerate only the sitemap.

Build for PHP shared hosting:

```bash
npm run build
```

Upload the complete contents of `dist/` to the hosting account's `public_html`
directory. The build includes `api/contact.php` and `.htaccess`; PHP must have
the standard `mail()` function enabled by the host.

Contact submissions are handled by `POST /api/contact.php` and delivered server-side to:

- `techtidekaleem@gmail.com`
- `sales@casalithic.com`
- `info@casalithic.com`

The PHP API validates and limits request bodies, includes a honeypot, same-origin
checks and IP rate limiting, and keeps recipient handling outside the React bundle.
It sends from `sales@casalithic.com` by default. If the hosting mail setup requires
another domain mailbox, set the `CONTACT_FROM_EMAIL` environment variable in the
hosting control panel.

### Contact form diagnostics

Rejected form requests are written to
`public_html/api/logs/contact-errors.jsonl`. Each response and log entry includes
the same `requestId`, making an individual failure easy to trace. PHP runtime
errors are written to `public_html/api/logs/php-errors.log`. These files contain
diagnostic metadata only; form names, email addresses, locations, and message
contents are not stored.

The endpoint sends through PHP's built-in `mail()` function. A `mail_accepted`
diagnostic means `mail()` handed the message to the hosting mail transport. If
that event exists but no email arrives, delivery, mailbox, SPF/DKIM, or spam
filtering must be checked in the hosting control panel.

The complete `api/logs` directory is denied over HTTP by both the root and nested
`.htaccess` files. Inspect the logs only through the hosting file manager or SSH.
If a live 400 response creates no diagnostic entry, the request was rejected by
the host's ModSecurity/WAF layer before PHP ran; use the response time and URL to
ask the host for the matching security event.

For local PHP testing after a build:

```bash
php -S localhost:8080 -t dist
```

## Project Structure

```text
src/
  assets/
  data/
  sections/
  App.jsx
  main.jsx
public/
  .htaccess
  api/
    contact.php
    logs/             # Protected server-side contact diagnostics
```

## Notes

- Source images are imported from `src/assets`.
- Generated build files are intentionally ignored and should be produced with `npm run build`.
- Local logs, dependency folders, and project brief documents are not committed.
