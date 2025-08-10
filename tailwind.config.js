/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'home-heading-small': ['28px', { lineHeight: '34px' }],
        'home-heading-large': ['48px', { lineHeight: '56px' }],
        'course-details-heading-small': ['26px', { lineHeight: '36px' }],
        'course-details-heading-large': ['36px', { lineHeight: '44px' }],
      },
    },
  },
  plugins: [],
};


