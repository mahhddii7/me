/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './@/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
      
    },
    
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ripple": "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
        "backgroundPositionSpin":
          "background-position-spin 3000ms infinite alternate",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },

        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
       
        "ripple": {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
      },
      dropShadow: {
        '10Xl': '0px 0px 20px #ffffff80'
      },

    },
  },
  plugins: [require("tailwindcss-animate")],
}