# Stella Nova — stellanovainc.com

Astro 7 site for Stella Nova. Fully static and hosted on GitHub Pages. Every push to `main` rebuilds and deploys it (see `.github/workflows/deploy.yml`).

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

The form posts to [Web3Forms](https://web3forms.com), which emails each submission to you. Get a free access key by entering your inbox address on their site, then paste it into `formKey` in `src/data/site.ts`. The key is meant to be public. Until it's set, the form shows a "not connected yet" message.

## Domain (DNS at Squarespace)

1. GitHub → repo → Settings → Pages: set Source to **GitHub Actions**. The custom domain comes from `public/CNAME`.
2. Squarespace → Domains → DNS Settings: delete the **Squarespace Defaults** preset.
3. Add these records:
   - `A` `@` → `185.199.108.153`
   - `A` `@` → `185.199.109.153`
   - `A` `@` → `185.199.110.153`
   - `A` `@` → `185.199.111.153`
   - `CNAME` `www` → `iamalexbirkett.github.io`
4. Once the domain resolves, tick **Enforce HTTPS** in Settings → Pages.
