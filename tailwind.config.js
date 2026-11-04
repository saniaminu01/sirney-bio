/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#08080D',
        neon: {
          cyan: '#22d3ee',
          purple: '#8b5cf6',
          pink: '#ec4899',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'sans-serif'],
        body: ['"DM Sans"', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
