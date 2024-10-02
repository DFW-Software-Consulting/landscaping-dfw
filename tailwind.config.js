/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Adding custom font family
      fontFamily: {
        baltimore: ['"Baltimore"', 'cursive'], // You can specify additional fallback fonts
      }
    }
  },
  plugins: []
}
