module.exports = {
  purge: {
    content: [
      'source/**/*.blade.php',
      'source/**/*.md',
      'source/**/*.html',
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
