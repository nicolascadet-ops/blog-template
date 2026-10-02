// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` to your real domain before deploying (used for RSS, sitemap and social links).
export default defineConfig({
  site: 'https://northbound.example',
  integrations: [sitemap()],
});
