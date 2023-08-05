/// <reference types='vitesvite-plugint' />
/// <reference types='vite/client' />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// import VitePluginSVGSpritemap from '@spiriit/vite-plugin-svg-spritemap'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fancy-auth-form/',
  plugins: [
    react(),
		// VitePluginSVGSpritemap('./src/icons/*.svg', {
    //   styles: 'src/scss/spritemap.scss'
    // })
    createSvgIconsPlugin({
      iconDirs: [ path.resolve(process.cwd(), 'public/icons') ],
      symbolId: 'icon-[dir]-[name]',
      customDomId: 'svg-sprite',
      svgoOptions: {
        plugins: [
          {
            name: 'convertColors',
            params: {
              currentColor: true
            }
          }
        ]
      }
    }),
  ],
  css: {
    devSourcemap: true,
  },

  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: './src/test/setup.ts',
  //   // you might want to disable it, if you don't have tests that rely on CSS
  //   // since parsing CSS is slow
  //   css: true,
  // },
});
