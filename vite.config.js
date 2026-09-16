import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  // Use environment variable to determine base path
  // GitHub Pages: /Ecommerce-Store/
  // Vercel (and other platforms): /
  base: process.env.VITE_BASE_PATH || '/',
})
