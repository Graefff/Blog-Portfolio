// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'pt',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});