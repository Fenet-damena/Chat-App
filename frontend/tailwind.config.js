import { defineConfig } from 'vite'
import daisyui from "daisyui";
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [
    tailwindcss,
    require('daisyui'),
  ],
})
