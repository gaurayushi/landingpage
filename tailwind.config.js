export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
