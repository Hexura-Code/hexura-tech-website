/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./portfolio.html", "./insights/**/*.html", "./404.html"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B1220', 800: '#0d1628', 900: '#070d18' },
        'electric-blue': { DEFAULT: '#3B82F6', 400: '#60a5fa', 600: '#2563eb' },
        'brand-cyan': { DEFAULT: '#06B6D4', 400: '#22d3ee', 600: '#0891b2' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    }
  },
  plugins: [],
}
