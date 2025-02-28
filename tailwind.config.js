/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(80vh 80vh at 40% 10%, var(--tw-gradient-stops))',
        'gradient-radial-m': 'radial-gradient(60vh 60vh at 30% 10%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '10xl': '9rem'
      }
    },
  },
  plugins: [],
};
