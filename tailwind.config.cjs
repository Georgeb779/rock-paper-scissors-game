/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        game: {
          "scissors": "#ECA922 ",
          "paper": "#4865F4",
          "rock": "#DC2E4E",
          "lizard": "#834FE3",
          cyan: "#40B9CE",
          "dark-text": "#3B4363",
          "header-outline": "#606E85",
        }
      }
    }
  },
  plugins: []
};
