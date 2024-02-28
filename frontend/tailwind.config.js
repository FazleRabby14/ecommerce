import colors from 'tailwindcss/colors';
const defaultTheme = require("tailwindcss/defaultTheme");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      colors: {
          'wild-strawberry': {
            '50': '#fef1f8',
            '100': '#fee5f2',
            '200': '#ffcae8',
            '300': '#ffa0d3',
            '400': '#ff65b3',
            '500': '#fd3d97',
            '600': '#ee1470',
            '700': '#cf0755',
            '800': '#ab0946',
            '900': '#8e0d3e',
            '950': '#580020',
        },
      }
    },
  },
  buildModules: ['@nuxt/postcss8', '@nuxtjs/tailwindcss'],
  plugins: [
    require("@tailwindcss/forms"),
    require('@tailwindcss/aspect-ratio')
  ],
};
