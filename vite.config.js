import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/* global process */
export default defineConfig({
  plugins: [react()],
   base: process.env.VITE_BASE_PATH || "/ond-portfolio",
})
