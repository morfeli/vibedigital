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
        'geist-regular': ['Geist Regular', 'sans-serif'], // Add the font family here
        'geist-semibold': ['Geist Semibold', 'sans-serif'], // Add the font family here
        'geist-bold': ['Geist Bold', 'sans-serif'], // Add the font family here
        'geist-light': ['Geist Light', 'sans-serif'], // Add the font family here
        'geist-thin': ['Geist Thin', 'sans-serif'], // Add the font family here
      },
      screens: {
        "mini-tablet": "500px"
      }
    },
  },
  plugins: [],
} satisfies Config

