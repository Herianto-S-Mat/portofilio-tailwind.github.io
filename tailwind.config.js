/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'ini': "url('/public/img/LOGO_PRIBADI.png')",
        'footer-texture': "url('/public/img/LOGO_PRIBADI.png')",
      }
    },
  },
  plugins: [],
}

