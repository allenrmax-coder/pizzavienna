import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// Served from https://allenrmax-coder.github.io/pizzavienna/ on GitHub Pages,
// so production assets need the "/pizzavienna/" base. Dev server stays at root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/pizzavienna/' : '/',
  plugins: [tailwindcss()],
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
  build: {
    target: 'es2020',
    cssMinify: true,
  },
}))
