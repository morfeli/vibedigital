import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "tangelo": "#f94d00",
        "cool-gray": "#cbd2d9",
        "cool-gray2": "#9aa5b1"

      },
      fontFamily: {
        'geist-semibold': ['Geist Semibold', 'sans-serif'], // Add the font family here
        'geist-bold': ['Geist Bold', 'sans-serif'], // Add the font family here
      },
    },
  },
  plugins: [],
} satisfies Config
