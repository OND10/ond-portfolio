/** @type {import('tailwindcss').Config} */
export default  {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
    ignores: [
      "tailwind.config.js",
      "postcss.config.js",
    ],
      animation: {
        slideDown: 'slideDown 0.4s ease-out',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      fontFamily: {
        mars: ["Mars", "sans-serif"],
        preah: ['Preahvihear', 'sans-serif'],
        tajawal: ['"Tajawal"', 'sans-serif'], 
        malgun: ['"Malgun Gothic"', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "ond-primary": "#667eea",
        "ond-secondary": "#764ba2",
        "ond-accent": "#4ecdc4",
        "ond-highlight": "#ff6b6b",
        "glass": "rgba(255, 255, 255, 0.05)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
}
