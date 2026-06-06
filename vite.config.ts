import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// Netlify and local dev serve from the domain root, so base stays "/".
// GitHub Pages serves under /pizzavienna/ — set GITHUB_PAGES=true when
// building specifically for Pages (the gh-pages deploy does this).
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/pizzavienna/' : '/',
  plugins: [tailwindcss()],
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
  build: {
    target: 'es2020',
    cssMinify: true,
  },
})
