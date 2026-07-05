/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          200: '#bac8ff',
          300: '#91a7ff',
          400: '#748ffc',
          500: '#5c7cfa',
          600: '#4c6ef5',
          700: '#1a2a6c',
          800: '#0f1b4d',
          900: '#0a1235',
          950: '#060c22',
        },
        gold: {
          50: '#fffdf0',
          100: '#fff9db',
          200: '#fff3bf',
          300: '#ffec99',
          400: '#ffe066',
          500: '#ffd43b',
          600: '#fab005',
          700: '#f59f00',
          800: '#e67700',
          900: '#d9480f',
        },
      },
    },
  },
  plugins: [],
}
