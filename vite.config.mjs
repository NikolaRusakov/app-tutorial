import { createAppConfig } from "@nextcloud/vite-config";
import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';
import path from "node:path";
import veauryVitePlugins from "veaury/vite/index.js";
// if vite 6, should use `veaury/vite/esm`
// import veauryVitePlugins from 'veaury/vite/esm'

import { nodePolyfills } from "vite-plugin-node-polyfills";
import vueJsx from "@vitejs/plugin-vue-jsx"; // Added this!
// { customElement: true }
const yourOverrides = defineConfig({
  // root: "src",
  // build: {
  //   outDir: "./dist",
  // },
  // optimizeDeps: {
  //     force: true,
  //     esbuildOptions: {

  //       loader: {
  //         '.js': 'jsx',
  //       },
  //     },
  //   },
//   esbuild: {
//     // loader: { '.js': '.jsx' },
//     loader: { test: /\.(js|ts|vue)$/, use: "vue-loader" },
//   },
  plugins: [
    // nodePolyfills(),
    // Turn off vue and vuejsx plugins
    // vue(),
    // vueJsx(),
    // When the type of veauryVitePlugins is set to vue,
    // only jsx in files in the directory named 'react_app' will be parsed with react jsx,
    // and jsx in other files will be parsed with vue jsx
    veauryVitePlugins({
      type: "vue",
        // type: 'react',
      // Configuration of @vitejs/plugin-vue
      // vueOptions: {...},
      // Configuration of @vitejs/plugin-react
      // reactOptions: {...},
      // Configuration of @vitejs/plugin-vue-jsx
      //   vueJsxOptions: {}
    }),
  ],
  // css: {
  //     preprocessorOptions: {
  //         scss: {
  //             includePaths: [
  //                 path.resolve(__dirname, './src/assets'),
  //             ],
  //         },
  //     },
  // }
});

export default yourOverrides;

// export default createAppConfig(
//   {
//     // entry points
//     main: "src/main.js",
//     // settings: 'src/settings.js',
//   },
//   {
//     // options
//     config: yourOverrides,
//   }
// );


// export default defineConfig({
//   plugins: [vue()],
// })
