// tailwind.config.js

/** @type {import('tailwindcss').Config} */
import tailwindScrollbarHide from 'tailwind-scrollbar-hide'; // 🚨 Importe aqui

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // 🚨 Adicione a chamada do plugin
    tailwindScrollbarHide
  ],
}