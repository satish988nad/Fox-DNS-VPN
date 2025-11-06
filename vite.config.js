import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Change this if your repo name differs
  base: '/fox-dns-vpn-site/',
  plugins: [react()],
})
