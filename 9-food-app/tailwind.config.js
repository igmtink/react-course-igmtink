/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-3rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(3rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadein: {
          from: { opacity: "0", transform: "translateY(3rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeout: {
          from: { bottom: "1rem", opacity: "1" },
          to: { bottom: "0", opacity: "0" },
        },
      },
      animation: {
        "slide-down": "slide-down 300ms ease-out forwards",
        "slide-up": "slide-up 1s ease-out forwards",
        "fade-in-out": "fadein 0.5s, fadeout 0.5s 2.5s",
      },
    },
  },
  plugins: [],
};
