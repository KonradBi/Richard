/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f5f6f2",
          100: "#e8ebe1",
          200: "#bcc58c",  // Light Green
          300: "#a4b161",  // Olive Green
          400: "#96a754",
          500: "#859649",
          600: "#6b783a",
          700: "#555f2e",
          800: "#454d26",
          900: "#3a4120",
        },
        neutral: {
          50: '#ffffff',   // Pure White
          100: '#f8f8f8',
          200: '#e9e9e9',  // Light Grey
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#606060',  // Dark Grey
          700: '#525252',
          800: '#404040',
          900: '#262626',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        'border-flow': {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
        },
        'border-flow-vertical': {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(100%)' },
        }
      },
      animation: {
        'border-flow': 'border-flow 3s ease-in-out infinite',
        'border-flow-vertical': 'border-flow-vertical 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
