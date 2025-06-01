/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        "violet": "0 0 8px 0 rgb(138, 99, 210)",
      },
      colors: {
        primary: {
          light: '#8A63D2',
          dark: '#F9A826',
        },
        background: {
          light: '#ffffff',
          dark: '#121212',
        },
        text: {
          light: '#000000',
          dark: '#ffffff',
        },
        header: {
          light: '#F5F4FA',
          dark: '#1E1E2F',
        },
      },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      borderColor: ['dark'],
      boxShadow: ['dark'],
    },
  },
    },
  },
  plugins: [],
}

