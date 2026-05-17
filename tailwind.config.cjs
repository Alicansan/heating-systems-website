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
        primary: '#0f172a',
        accent: '#e95a0d',
        brandBlue: '#037db1',
        brandNavy: '#1c355e',
        muted: '#94a3b8',
      },
    },
  },
  plugins: [],
}
