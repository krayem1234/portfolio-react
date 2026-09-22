/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#05060a',
        surface: '#0c0e17',
        surface2: '#12141f',
        line: '#1e2130',
        ink: '#e9eaf2',
        muted: '#8b8fa3',
        accent: {
          violet: '#8b5cf6',
          cyan: '#22d3ee',
          pink: '#f472b6',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      animation: {
        blob: 'blob 22s ease-in-out infinite',
        blob2: 'blob2 26s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 26s linear infinite',
        'spin-slow': 'spin 14s linear infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(6vw, -4vh) scale(1.15)' },
          '66%': { transform: 'translate(-4vw, 5vh) scale(0.9)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-5vw, 6vh) scale(0.85)' },
          '66%': { transform: 'translate(5vw, -3vh) scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
