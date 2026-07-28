import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.SITES_BUILD === '1' ? '/' : '/My-port/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
