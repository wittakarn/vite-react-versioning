import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: false,
      pages: [
        {
          entry: 'src/main.tsx',
          filename: 'index.html',
          template: 'index.html',
        },
        {
          filename: 'version.html',
          template: 'version.html',
          injectOptions: {
            data: {
              version: '0.0.1',
            },
          },
        },
      ],
    })
  ],
})
