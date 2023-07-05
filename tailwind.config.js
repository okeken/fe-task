/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
       "primary-black":"#131316",
       "secondary-orange":"#FF5403",
       "cs-orange-100":"#FFEEE5",
       "cs-gray-500":"#31373D"
      },
      fontFamily: {
        sans: ['var(--font-sohne)']
    },
    },
  },
  plugins: [],
}
