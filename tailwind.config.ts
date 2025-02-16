import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
          100: '#78CDD7',
          200: '#44A1A0',
          300: '#0D5C63',
        },
      },
      textColor: {
        DEFAULT: '#34333E',
      },
      fontSize: {
        xxs: '0.75rem',
        xs: '0.938rem',
        md: '1.25rem',
        lg: '1.563rem',
      },
    },
  },

  plugins: [],
} satisfies Config;
