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
      'media-min-900': '900px',
      'mobile-tablet': {'min': '320px', 'max': '768px'}
    },
    keyframes: {
      smoothChange: {
        '0%': {
          transform: 'translateY(500px)',
          opacity: 0
        },
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
        '100%': {
          transform: 'translateY(500px)',
          opacity: 0
        }
      },
      opacity: {
        '0%': {
          opacity: 0
        },
        '100%': {
          opacity: 0.7
        }
      },
      opacityEnd: {
        '0%': {
          opacity:  0.7
        },
        '100%': {
          opacity: 0
        }
      },
      openMenu: {
        '0%': {
          width: '70px',
          opacity: 0,
        },
        '20%': {
          opacity: 0,
        },
        '100%': {
          width: '50%',
          opacity: 1,
        }
      },
      closeMenu: {
        '0%': {
          width: '50%',
          opacity: 1,
        },
        '80%': {
          opacity: 0,
        },
        '100%': {
          width: '70px',
          opacity: 0,
        }
      },
      openMenuMobile: {
        '0%': {
          width: '70px',
          opacity: 0,
        },
        '20%': {
          opacity: 0,
        },
        '100%': {
          width: '100%',
          opacity: 1,
        }
      },
      closeMenuMobile: {
        '0%': {
          width: '100%',
          opacity: 1,
        },
        '80%': {
          opacity: 0,
        },
        '100%': {
          width: '70px',
          opacity: 0,
        }
      },
      focusInput:{
        '0%': {
          top: '14px'
        },
        '100%': {
          top: '-12px',
          zIndex: '10',
          backgroundColor: '#150E14',
          padding: '0 4px',
          fontSize: '16px'
        }
      },
      focusInputEnd:{
        '0%': {
          top: '-12px',
          zIndex: '10',
          backgroundColor: '#150E14',
          padding: '0 4px',
          fontSize: '16px'
        },
        '100%': {
          top: '14px',
          fontSize: '14px'
        }
      }

    },
    animation: {
      smoothChange: 'smoothChange 1s ease-in-out',
      smoothChangeEnd: 'smoothChangeEnd 1s ease-in-out',
      opacity: 'opacity 1s',
      opacityEnd: 'opacityEnd 1s',
      openMenu: 'openMenu 1s',
      closeMenu: 'closeMenu 1s',
      openMenuMobile: 'openMenuMobile 1s',
      closeMenuMobile: 'closeMenuMobile 1s',
      focusInput: 'focusInput 0.5s',
      focusInputEnd: 'focusInputEnd 0.7s'
    },
    
  },
  plugins: [],
}
