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

Serve the production build and contact API:

```bash
cp .env.example .env
npm start
```

Configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and `MAIL_FROM`
in the server-side `.env` before starting production. Do not use `VITE_` prefixes
for mail credentials, because Vite-prefixed variables are exposed to the browser.

Contact submissions are handled by `POST /api/contact` and delivered server-side to:

- `techtidekaleem@gmail.com`
- `sales@casalithic.com`
- `info@casalithic.com`

The API validates and limits request bodies, includes a honeypot and basic IP rate
limiting, and never sends SMTP credentials or the recipient configuration to the client.

## Project Structure

```text
src/
  assets/
  data/
  sections/
  App.jsx
  main.jsx
server/
  contactApi.js
  index.js
```

## Notes

- Source images are imported from `src/assets`.
- Generated build files are intentionally ignored and should be produced with `npm run build`.
- Local logs, dependency folders, and project brief documents are not committed.
