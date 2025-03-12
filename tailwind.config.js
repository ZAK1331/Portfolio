/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        dark: {
          primary: '#121212',
          secondary: '#1E1E1E',
          accent: '#2979FF',
          text: '#E0E0E0',
          border: '#2A2A2A',
        },
      },
    },
  },
  plugins: [],
};