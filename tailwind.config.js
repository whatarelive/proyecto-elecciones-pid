/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : [
        { footer: '#263238' }
      ]
    },
  },
  plugins: [],
};

