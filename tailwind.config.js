/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#000000',
          card: '#111111',
          lighter: '#222222'
        },
        accent: {
          DEFAULT: '#FFFFFF',
          light: '#CCCCCC'
        }
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};