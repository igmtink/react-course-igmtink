/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(0.9)' },
          '30%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' }
        },
        'slide-right-to-left': {
          from: { opacity: '0', transform: 'translateX(3rem)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        }
      },
      animation: {
        shake: 'shake 300ms ease-out',
        'slide-right-to-left': 'slide-right-to-left 300ms ease-out forwards'
      }
    }
  },
  plugins: []
}
