/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary: deep leaf green
        forest: {
          50: '#f3f8f3',
          100: '#e3efe4',
          200: '#c8dfca',
          300: '#9fc6a3',
          400: '#6fa575',
          500: '#4a8752',
          600: '#386b40',
          700: '#2e5535',
          800: '#27442c',
          900: '#213825',
          950: '#0f2012'
        },
        // Neutrals: warm sand / limestone
        sand: {
          50: '#fbf8f3',
          100: '#f5efe4',
          200: '#ebdfc9',
          300: '#dcc7a3',
          400: '#c9a977',
          500: '#b78f58'
        },
        // Accent: terracotta, used sparingly for calls to action
        clay: {
          400: '#d98a63',
          500: '#c2693f',
          600: '#a8532f',
          700: '#8a4126'
        },
        ink: {
          DEFAULT: '#1d2a21',
          muted: '#4b5a50'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'Cambria', 'serif']
      },
      boxShadow: {
        card: '0 1px 2px rgb(29 42 33 / 0.06), 0 8px 24px -8px rgb(29 42 33 / 0.12)',
        lift: '0 2px 4px rgb(29 42 33 / 0.08), 0 16px 36px -10px rgb(29 42 33 / 0.22)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both'
      }
    }
  },
  plugins: []
}
