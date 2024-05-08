/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      "off-white": "#dedede",
      "dark": "#0B0A07",
      "dark-gray": "#1f1c14",
      "lime": "#4ee760",
      "light-gray": "#999"
    },
    fontFamily: {
      "visitor": ['Visitor', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

