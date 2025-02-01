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
          50: "#f0f9f0",
          100: "#dbf0db",
          200: "#bde2bd",
          300: "#93cd93",
          400: "#63b363",
          500: "#3d8c3d",
          600: "#2f702f",
          700: "#295c29",
          800: "#254925",
          900: "#213d21",
          950: "#0f200f",
        },
        neutral: {
          50: '#f8f9f8',
          100: '#f0f1f0',
          800: '#1f2937',
          900: '#111827',
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
