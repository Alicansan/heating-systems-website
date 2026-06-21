module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6A6D70',
        accent: '#C49A3A',
        brandBlue: '#2E5D66',
        brandNavy: '#2E5D66',
        muted: '#F5F3EF',
        background: '#898e8c',
        text: '#2F3336',
      },
    },
  },
  plugins: [],
}
