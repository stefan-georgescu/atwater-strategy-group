# Summit Street Advisory

Ultra-premium marketing site for a 1-on-1 high finance coaching company. Dark "ink & champagne" aesthetic, serif display type, scroll-reveal animations, and a single conversion-focused landing page.

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — lint

## Editing content

Almost all copy lives in one place: [`src/lib/site.ts`](src/lib/site.ts).

- `site` — name, tagline, **booking URL (Calendly placeholder)**, contact email, legal disclaimer
- `stats` — the headline numbers (300+ offers, etc.)
- `firms` — the scrolling "offers at" marquee
- `pillars` — the 4-phase process
- `tracks` — the role specializations
- `mentors` — mentor cards
- `testimonials`, `faqs`

> **Before launch:** replace the placeholder Calendly link, email, mentor bios, and stats with real, verifiable details. The numbers and quotes are illustrative.

## Structure

```
src/
  app/
    layout.tsx     # fonts + metadata
    page.tsx       # section composition
    globals.css    # theme tokens, animations, utilities
  components/
    Nav.tsx        # sticky blur nav + mobile menu
    Reveal.tsx     # scroll-reveal wrapper
    Marquee.tsx    # firm logo marquee
    Faq.tsx        # accordion
  lib/
    site.ts        # all editable content
```
