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
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require('@tailwindcss/custom-forms')],
}
