import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/project_pictures/pestcontrolpic.webp')",
      },
      colors: {
        'Brand-BG': '#019EE1',
        'serfviceBColorr': "#f6f6f6"

      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
