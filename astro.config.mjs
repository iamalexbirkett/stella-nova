import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://stellanovainc.com',
  output: 'static',
  adapter: vercel(),
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/contact/thanks') })],
});
