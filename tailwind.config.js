const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: [
      'source/**/*.blade.php',
      'source/**/*.md',
      'source/**/*.html',
      'source/_assets/js/main.js',
    ]
  },
  theme: {
    extend: {
      colors: {
        "ninja-blue": "#117cc1",
        "ninja-blue-darker": "#0a3f60",
      },
      maxWidth: {
        '8xl': '90rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    ],
}
