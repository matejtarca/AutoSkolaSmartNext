/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./workspaces/web-client/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        128: "40rem",
      },
    },
  },
  plugins: [],
};
