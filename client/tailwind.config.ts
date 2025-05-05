import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Roboto'],
      },
      width: {
        128: '32rem',
      },
      colors: {
        mainBackground: '#E9EEF2',
        primary: {
          DEFAULT: '#0D5C63',
          30: '#638C8F',
          50: '#7DC1C930',
          100: '#78CDD7',
          200: '#44A1A0',
          300: '#0D5C63',
          500: '#17373A',
        },
        yellowIcon: '#DBB736',
      },
      textColor: {
        DEFAULT: '#34333E',
      },
      fontSize: {
        xxs: '0.75rem',
        xs: '0.938rem',
        sm: '1rem',
        md: '1.25rem',
        lg: '1.563rem',
        xl: '1.8rem',
      },
    },
  },

  plugins: [],
} satisfies Config
