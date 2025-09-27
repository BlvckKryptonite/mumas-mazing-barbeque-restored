/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx, html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Bangers', 'Marvel', 'League Spartan', 'cursive'],
        'body': ['Poppins', 'League Spartan', 'sans-serif'],
      },
      animation: {
        'flame': 'flame 2s ease-in-out infinite alternate',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        flame: {
          '0%': { 
            transform: 'scale(1) rotate(-1deg)',
            filter: 'hue-rotate(0deg)'
          },
          '100%': { 
            transform: 'scale(1.05) rotate(1deg)',
            filter: 'hue-rotate(30deg)'
          }
        }
      },
      screens: {
        'xs': '475px',
      }
    },
  },
  plugins: [],
}