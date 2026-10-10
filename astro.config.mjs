import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://new-portfolio-2026.pages.dev',
  output: 'static',
  compressHTML: false,
  integrations: [sitemap()],
});
