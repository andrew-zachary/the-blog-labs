import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4200
  },
  integrations: [tailwind(), mdx(), vue({
    appEntrypoint: '/src/js/vue-app-astro'
  }), react()],
  vite: {
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/_mixins.scss";'
        }
      }
    },
    ssr: {
      noExternal: ['react-use']
    }
  }
});