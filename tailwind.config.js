module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'bg-blue': '#020318',
        'white': '#fff',
        'theme-cyan': '#3E92CC',
        'theme-blue': '#093057',
        // 'theme-border': '#e36262',
        'theme-border': '#4BD5F5',
        'bg-blue-2': '#14224f', 
      },
    }
  },
  plugins: [],
}
