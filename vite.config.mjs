import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/bhumika-portfolio/', // 👈 required for GitHub Pages
})
