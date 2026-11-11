import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isVercel = Boolean(process.env.VERCEL)
  const isDev = command === 'serve'

  return {
    base: isDev || isVercel ? '/' : '/portfolio/',
    plugins: [react(), tailwindcss()],
    server: {
      port: 5173,
      open: true,
    },
  }
})
