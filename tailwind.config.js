/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E1261C', // NICT Red
          50: '#FFF5F5',
          100: '#FFE3E3',
          200: '#FFC9C9',
          300: '#FFA8A8',
          400: '#FF6B6B',
          500: '#E1261C',
          600: '#C41E18',
          700: '#A01814',
          800: '#7B120F',
          900: '#5A0C0B',
        },

        secondary: {
          DEFAULT: '#2B2678',
          50: '#EAE9F5',
          100: '#CBC8E6',
          200: '#A29CD1',
          300: '#7A71BC',
          400: '#534AA0',
          500: '#2B2678',
          600: '#231F63',
          700: '#1B184D',
          800: '#131138',
          900: '#0B0A22',
        },
        accent: {
          DEFAULT: '#F2A93B',
          light: '#F8C572',
          dark: '#D88E1F',
        },
        surface: {
          DEFAULT: '#FAF8F7',
          dark: '#150E0D',
        },
        ink: {
          DEFAULT: '#241B1A',
          light: '#5C4F4D',
          inverse: '#F1E9E7',
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        premium: '0 20px 50px -12px rgba(225, 38, 28, 0.25)',
        'premium-orange': '0 20px 50px -12px rgba(43, 38, 120, 0.3)',
        glass: '0 8px 32px 0 rgba(43, 38, 120, 0.12)',
        'glow-primary': '0 0 40px rgba(225, 38, 28, 0.35)',
        'glow-accent': '0 0 40px rgba(242, 169, 59, 0.35)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(225,38,28,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(225,38,28,0.06) 1px, transparent 1px)',
        'hero-radial':
          'radial-gradient(circle at 20% 20%, rgba(242,169,59,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(43,38,120,0.15), transparent 40%), radial-gradient(circle at 50% 100%, rgba(225,38,28,0.18), transparent 50%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(3deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 50%': { opacity: 1 },
          '51%, 100%': { opacity: 0 },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: 0.6 },
          '70%': { transform: 'scale(1.4)', opacity: 0 },
          '100%': { transform: 'scale(1.4)', opacity: 0 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        gradientShift: 'gradientShift 8s ease infinite',
        marquee: 'marquee 30s linear infinite',
        pulseRing: 'pulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
}
