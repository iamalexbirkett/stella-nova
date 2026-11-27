# Stella Nova — stellanovainc.com

Astro 7 site for Stella Nova. Static pages, plus one serverless function for the contact form, deployed on Vercel.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Where things live

- `src/data/site.ts`: offers (copy, prices, FAQs, fractional seat count), proof points, talks and bylines
- `src/pages/`: homepage, `/work-with-me/[slug]`, `/about`, `/writing`, `/contact`
- `src/content/writing/`: blog posts. Copy `_template.md`, rename it, and set `draft: false` to publish.
- `src/styles/global.css`: brand tokens (Kick Push palette, Zodiak and Karla)
- `public/llms.txt`, `public/robots.txt`: AI crawler guidance. Update `llms.txt` whenever offers change.

## Contact form

`/api/contact` sends each submission by email through [Resend](https://resend.com). Set these in Vercel under Project → Settings → Environment Variables:

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | API key from Resend |
| `CONTACT_TO_EMAIL` | The inbox that receives inquiries |
| `CONTACT_FROM_EMAIL` | Optional. Use a sender like `Stella Nova <hello@stellanovainc.com>` once the domain is verified in Resend. Until then the default `onboarding@resend.dev` sender works. |

If the variables aren't set, the live form shows a "not connected yet" message. In local dev, submissions are logged to the terminal instead of sent.

## Domain (DNS at Squarespace)

1. Vercel → Project → Settings → Domains: add `stellanovainc.com` and `www.stellanovainc.com`.
2. Squarespace → Domains → DNS Settings: delete the **Squarespace Defaults** preset.
3. Add the records Vercel shows. Typically:
   - `A` `@` → `76.76.21.21`
   - `CNAME` `www` → `cname.vercel-dns.com`
4. If you verify the domain in Resend for sending, add Resend's records here too (MX/TXT on a `send` subdomain, plus DKIM).
