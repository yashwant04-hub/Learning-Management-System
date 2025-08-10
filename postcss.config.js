// postcss.config.js
export default {
  plugins: {
    // This line tells PostCSS to use the Tailwind CSS plugin.
    // It has been updated to use '@tailwindcss/postcss' as required by newer versions.
    // This is the key change to resolve the error you were seeing.
    '@tailwindcss/postcss': {},
    // Autoprefixer is a common PostCSS plugin used with Tailwind CSS
    // to add vendor prefixes to CSS rules for broader browser compatibility.
    autoprefixer: {},
  },
};