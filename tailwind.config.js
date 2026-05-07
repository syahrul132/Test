/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#38bdf8',
          purple: '#8b5cf6',
          pink: '#ec4899',
          green: '#22c55e',
        },
      },
      boxShadow: {
        neon: '0 0 18px rgba(56, 189, 248, 0.4)',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
      },
      animation: {
        pulseSoft: 'pulseSoft 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
