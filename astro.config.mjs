// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['en', 'pt-br'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});