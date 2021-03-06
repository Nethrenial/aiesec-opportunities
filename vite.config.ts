import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";
import Layouts from "vite-plugin-vue-layouts";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Inspect from "vite-plugin-inspect";
import Unocss from "unocss/vite";
import { ViteWebfontDownload } from "vite-plugin-webfont-dl";
import compress from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  build: {
    minify: "terser",
    terserOptions: {
      output: {
        comments: false,
      },
    },
  },

  plugins: [
    vue({ reactivityTransform: true }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ["vue"],
      onRoutesGenerated: (routes) =>
        generateSitemap({ routes, dest: "public" }),
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    ViteWebfontDownload([
      "https://fonts.googleapis.com/css2?family=Raleway:wght@400;900&display=swap",
    ]),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "vue/macros",
        "@vueuse/head",
        "@vueuse/core",
      ],
      dts: "./auto-imports.d.ts",
      eslintrc: {
        enabled: true, // <-- this
      },
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/components.d.ts",
      resolvers: [IconsResolver()],
    }),

    Icons(),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss({
      shortcuts: [
        {
          "flex-centered": "flex items-center justify-center",
          "grid-centered": "grid items-center justify-center",
        },
      ],
    }),

    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://localhost:3333/__inspect/ to see the inspector
    Inspect(),
    compress(),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/styles/mixins";',
      },
    },
  },
});
