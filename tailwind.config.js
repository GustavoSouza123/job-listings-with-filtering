/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'sm': {'max': '767px'}, // <= 767px
                'lg': {'min': '768px'}, // >= 768px
            },
            colors: {
                "cyan": "var(--desaturated-dark-cyan)",
                "grayish-cyan-1": "var(--light-grayish-cyan-1)",
                "grayish-cyan-2": "var(--light-grayish-cyan-2)",
                "grayish-cyan-3": "var(--dark-grayish-cyan)",
                "grayish-cyan-4": "var(--very-dark-grayish-cyan)",
                "white": "var(--white)",
                "box-shadow": "var(--box-shadow)",
            },
            backgroundImage: {
                "desktop-header": "url('../assets/bg-header-desktop.svg')",
                "mobile-header": "url('../assets/bg-header-mobile.svg')",
            },
            boxShadow: {
                custom: "0px 10px 30px -20px var(--box-shadow)",
            },
        },
    },
    plugins: [],
}
