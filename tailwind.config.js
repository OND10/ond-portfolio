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
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'primary-light': 'var(--primary-light)',
        secondary: 'var(--secondary)',
        'secondary-dark': 'var(--secondary-dark)',
        'secondary-light': 'var(--secondary-light)',
        accent: 'var(--accent)',
        'accent-dark': 'var(--accent-dark)',
        'accent-light': 'var(--accent-light)',
        'ond-red': 'var(--ond-red)',
        'ond-teal': 'var(--ond-teal)',
        'ond-blue': 'var(--ond-blue)',
        'ond-purple': 'var(--ond-purple)',
        'ond-orange': 'var(--ond-orange)',
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-tertiary': 'var(--bg-tertiary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'text-accent': 'var(--text-accent)',
        'glass': 'var(--bg-glass)',
        'glass-border': 'var(--border-glass)',
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
