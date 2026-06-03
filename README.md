# Atwater Strategy Group

Marketing site and member portal for Atwater Strategy Group — 1-on-1 high finance and management consulting coaching.

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Live site

- **Production (Vercel):** https://summit-street-advisory.vercel.app
- **Custom domain (after DNS):** https://atwaterstrategygroup.com

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Almost all copy lives in [`src/lib/site.ts`](src/lib/site.ts).

## Deploy on Vercel

The project is linked to Vercel (`summit-street-advisory`). Redeploy:

```bash
vercel deploy --prod
```

### Custom domain DNS (GoDaddy)

In your GoDaddy DNS for **atwaterstrategygroup.com**, add:

| Type  | Name | Value              |
|-------|------|--------------------|
| A     | @    | `76.76.21.21`      |
| A     | www  | `76.76.21.21`      |

Or point nameservers to Vercel (see [Vercel domain docs](https://vercel.com/docs/domains/working-with-domains)).

Propagation can take up to 48 hours; Vercel will email when the domain is verified.

## GitHub

```bash
gh auth login
gh repo create atwater-strategy-group --public --source=. --remote=origin --push
```

Then connect the repo in the Vercel dashboard for automatic deploys on push.
