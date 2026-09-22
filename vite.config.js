import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: "DigiTeam",
        theme_color: '#2381c0',
        icons: [
          {
            src: './img/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './img/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,ttf,eot,woff,woff2}'],
        maximumFileSizeToCacheInBytes: 4000000,
      },
    })
  ],
  base: "./"
})
