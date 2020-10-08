// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        golden: '#da8b10',
        orange: '#8b3100',
        sand: '#9f7249',
        ballerina: '#d09070',
      },
      fontFamily: {
        script: ['Alchemary', 'script'],
        sans: ['Lato', 'sans-serif'],
        // serif: ['Bodoni', 'serif'],
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          h1: {
            fontFamily: ['Alchemary'],
            fontSize: '4rem',
          },
          // p: {
          // fontFamily: ['Bodoni', 'serif'],
          // fontSize: '1rem',
          // },
          // span: {
          // fontFamily: ['Bodoni', 'serif'],
          // fontSize: '1rem',
          // },
        },
      },
    }),
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/typography'),
  ],
}
