/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        'luxury-dark': '#0d0a07',
        'luxury-dark-2': '#130f0b',
        'luxury-teal': '#008080',
        'luxury-teal-light': '#00A3A3',
        'atelier-gold': '#c9a84c',
        'off-white': '#F5F0E8',
        'warm-white': '#EDE8DF',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
