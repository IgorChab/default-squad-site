/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '320px',
      'tablet': '768px',
      'laptop': '1024px',
      'desctop': '1290px',
      'mobile-max': {'max': '320px'},
      'tablet-max': {'max': '768px'},
      'laptop-max': {'max': '1024px'},
      'desctop-max': {'max': '1290px'},
      'media-900': {'max': '900px'},
      'media-min-900': '900px'
    },
    keyframes: {
      smoothChange: {
        '0%': {
          transform: 'translateY(500px)',
          opacity: 0
        },
        // '80%': {
        //   opacity: 10
        // },
        '100%': {
          transform: 'translateY(8px)',
          opacity: 100
        }
      },
      smoothChangeEnd: {
        '0%': {
          transform: 'translateY(8px)',
          opacity: 100
        },
        // '50%': {
        //   opacity: 0
        // },
        '100%': {
          transform: 'translateY(500px)',
          opacity: 0
        }
      }

    },
    animation: {
      smoothChange: 'smoothChange 1s ease-in-out',
      smoothChangeEnd: 'smoothChangeEnd 1s ease-in-out'
    },
    
  },
  plugins: [],
}
