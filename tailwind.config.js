/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  colors: {
    'blue': '#1fb6ff',
    'purple': '#7e5bef',
    'pink': '#f5f5f5',
    'light grey': '#e0e0e0',
    'green': '#13ce66',
    'grey': '#607d8b',
    'black': '#000000',
    'gray': '#8492a6',
    'white': '#ffffff',
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  extend: {
    spacing: {
      '128': '32rem',
      '144': '36rem',
    },
    borderRadius: {
      '4xl': '2rem',
    }
  }
}
}
