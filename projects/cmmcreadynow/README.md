# CMMC Ready Now

Next.js 14 website for [cmmcreadynow.com](https://cmmcreadynow.com) by Capital Cyber Compliance.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **TypeScript**
- **Lucide React** for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All site content is in a single file: `src/content/site-content.ts`. Edit text, add services, update testimonials, etc. from that one file.

## Contact Form

The contact form (`/api/contact`) supports three modes:

1. **Web3Forms** (recommended): Set `WEB3FORMS_ACCESS_KEY` env var. Free at [web3forms.com](https://web3forms.com).
2. **SMTP/Nodemailer**: Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and optionally `SMTP_FROM` and `SMTP_SECURE`.
3. **Fallback**: Logs to console (development only).

All submissions are sent to `mgmt@capital-cyber.com`.

## Deploy to Vercel

1. Push to GitHub
2. Import in [vercel.com](https://vercel.com)
3. Set environment variables for your chosen email provider
4. Deploy

Or use the CLI:

```bash
npm i -g vercel
vercel
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `WEB3FORMS_ACCESS_KEY` | For Web3Forms | API key from web3forms.com |
| `SMTP_HOST` | For SMTP | Mail server hostname |
| `SMTP_PORT` | For SMTP | Mail server port (default 587) |
| `SMTP_USER` | For SMTP | SMTP username |
| `SMTP_PASS` | For SMTP | SMTP password |
| `SMTP_FROM` | Optional | From address |
| `SMTP_SECURE` | Optional | Set to "true" for port 465 |

## Build

```bash
npm run build
```
