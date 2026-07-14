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
```

## Notes

- Source images are imported from `src/assets`.
- Generated build files are intentionally ignored and should be produced with `npm run build`.
- Local logs, dependency folders, and project brief documents are not committed.
