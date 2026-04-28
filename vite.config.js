import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Adicione a linha abaixo com o nome do seu repositório:
  base: '/meuAppReact/',
})
