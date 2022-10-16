/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        audiowide: "'Audiowide', cursive",
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        purpLight: "#372948",
        purpDark: "#251B37",
        dark: "#1E1E1E",
        offWhite: "#F3F3F3",
        sensorOk: "#0BBA1C",
        sensorWarning: "#EC7100",
        sensorDanger: "#DB3333",
      },
    },
  },
  plugins: [],
};
