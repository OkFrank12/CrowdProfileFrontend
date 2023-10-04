/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        firstpoint: { max: "1500px" },
        secondpoint: { max: "1050px" },
        thirdpoint: { max: "900px" },
        fourthpoint: { max: "600px" },
      },
    },
  },
  plugins: [],
};
