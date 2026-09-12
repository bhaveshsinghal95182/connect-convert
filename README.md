# Connect & Convert Agency Website

A responsive Vite + React + TypeScript website created from the supplied Connect & Convert brochure and branding.

The homepage uses a sticky, scroll-controlled video hero. Scrolling forward scrubs the supplied MP4 forward; scrolling upward reverses it. Visitors who prefer reduced motion see a static poster instead.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown by Vite (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Pages

- `/` - Home
- `/about` - About us
- `/contact` - Contact us
- `/privacy-policy` - Privacy policy

## Before publishing

1. Add the agency's verified email, phone number, address, and social links.
2. Connect the contact form to an email service or backend. It currently validates and shows a clearly labelled local-demo confirmation without storing or transmitting personal data.
3. Have the privacy policy reviewed and replace `[Insert privacy contact email]`.
4. Configure SPA fallback routing (`/*` to `/index.html`) on the chosen host.
