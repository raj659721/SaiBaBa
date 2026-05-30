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
        'smoke':        '#F5F4F2',
        'smoke-2':      '#EDECE9',
        'smoke-3':      '#E3E2DD',
        'smoke-4':      '#D5D4CE',
        'jet':          '#0C0C0C',
        'jet-2':        '#111111',
        'jet-3':        '#1A1A1A',
        'jet-mid':      '#3D3D3D',
        'jet-light':    '#6E6E6E',
        'silver':       '#9A9A9A',
        'silver-dark':  '#6B6B6B',
        'silver-light': '#CECECE',
        'pearl':        '#FAFAF9',
        'cream':        '#EAE4DA',
        'cream-2':      '#E3DCD2',
        'cream-3':      '#DAD2C5',
        'cream-4':      '#CFC6B7',
        'walnut':       '#2C1A0E',
        'walnut-mid':   '#7A5C42',
        'walnut-light': '#A8845F',
        'gold':         '#C9A84C',
        'gold-dark':    '#9B7A28',
        'gold-light':   '#E8D5A3',
        'champagne':    '#F0E0B0',
        'ivory':        '#FFFDF7',
        'luxury-dark':  '#0C0C0C',
        'luxury-dark-2':'#111111',
        'luxury-gold':  '#9A9A9A',
        'luxury-teal':  '#9A9A9A',
        'luxury-teal-light': '#CECECE',
        'atelier-gold': '#9A9A9A',
        'off-white':    '#F5F4F2',
        'warm-white':   '#EDECE9',
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
