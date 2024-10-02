/** @type {import('tailwindcss').Config} */
const textShadowPlugin = require('@iunteq/tailwindcss-textshadow')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Adding custom box shadow (optional)
      boxShadow: {
        'custom-shadow': '0 4px 6px rgba(0, 0, 0, 0.1)' // Customize this value
      },
      // Adding custom text shadows (if needed)
      textShadow: {
        default: '2px 2px 4px rgba(0, 0, 0, 0.1)', // Example custom text shadow
        md: '4px 4px 8px rgba(0, 0, 0, 0.2)' // Larger shadow for different styles
      }
    }
  },
  plugins: [textShadowPlugin]
}
