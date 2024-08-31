/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    fontFamily: {
      primary: "Saira",
    },
    extend: {
      colors: {
        primary: "#23262F",
        accent: "#286F6C",
      },
      dropShadow: {
        primary: "0px 4px 10px rgba(15, 27, 51, 0.05)",
      },
      backgroundImage: {
        hero: 'url("/src/assets/img/hero-bg.png")',
        newsletter: 'url("/src/assets/img/newsletter.png")',
      },
    },
  },
  plugins: [],
};
