import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "tangelo": "#f94d00",
        "cool-gray": "#cbd2d9",
        "cool-gray2": "#9aa5b1",
        "orange1": "#d42b05",
        "orange2": "#c40600",
        "black1": "#161619"

      },
      fontFamily: {
        'geist-regular': ['Geist Regular', 'sans-serif'], // Add the font family here
        'geist-semibold': ['Geist Semibold', 'sans-serif'], // Add the font family here
        'geist-bold': ['Geist Bold', 'sans-serif'], // Add the font family here
        'geist-light': ['Geist Light', 'sans-serif'], // Add the font family here
        'geist-thin': ['Geist Thin', 'sans-serif'], // Add the font family here
      },
      screens: {
        "mini-tablet": "500px",
        "large-tablet": "810px",
        "desktop-1440": "1440px"
      }
    },
  },
  plugins: [],
} satisfies Config

