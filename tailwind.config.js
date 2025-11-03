module.exports = {
  content: [
    "./index.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        /* Brand tokens aligned with inline :root in index.html */
        'brand-50': '#f7f6f2',
        'brand-500': '#4661A3',
        'brand-600': '#35509A',
        'brand-700': '#2b3f78'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      container: {
        center: true,
        padding: '1rem'
      }
    }
  },
  plugins: []
};
