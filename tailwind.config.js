/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cyan": "var(--desaturated-dark-cyan)",
        "grayish-cyan-1": "var(--light-grayish-cyan-1)",
        "grayish-cyan-2": "var(--light-grayish-cyan-2)",
        "grayish-cyan-3": "var(--dark-grayish-cyan)",
        "grayish-cyan-4": "var(--very-dark-grayish-cyan)",
        "white": "var(--white)",
      },
      backgroundImage: {
        "desktop-header": "url('./src/assets/bg-header-desktop.svg')",
        "mobile-header": "url('./src/assets/bg-header-mobile.svg')",
      }
    },
  },
  plugins: [],
}
