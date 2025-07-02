/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'pizza-red': '#dc2626',
        'pizza-orange': '#ea580c',
        'pizza-yellow': '#eab308',
        'pizza-green': '#16a34a',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        pizzaworld: {
          "primary": "#dc2626",
          "secondary": "#ea580c",
          "accent": "#eab308",
          "neutral": "#1f2937",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#16a34a",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
} 