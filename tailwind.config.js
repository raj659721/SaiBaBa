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
        'cream':       '#F8F4EE',
        'cream-2':     '#F0E9DF',
        'cream-3':     '#E8DDD0',
        'cream-4':     '#E0D5C4',
        'walnut':      '#2C1A0E',
        'walnut-mid':  '#7A5C42',
        'walnut-light':'#A8845F',
        'gold':        '#C9A84C',
        'gold-dark':   '#9B7A28',
        'gold-light':  '#E8D5A3',
        'champagne':   '#F0E0B0',
        'ivory':       '#FFFDF7',
        'luxury-dark': '#2C1A0E',
        'luxury-dark-2':'#1E1008',
        'luxury-teal': '#C9A84C',
        'luxury-teal-light': '#E8D5A3',
        'atelier-gold':'#C9A84C',
        'off-white':   '#F8F4EE',
        'warm-white':  '#F0E9DF',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
