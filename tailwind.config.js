/** @type {import('tailwindcss').Config} */

// OVERLAYS:
const bottomLeft =
  "linear-gradient(-1deg, rgba(208, 212, 194, 1) 25%, rgba(208, 212, 194, 0.5) 50%, rgba(208, 212, 194, 0) 75%)";
const bottomRight =
  "linear-gradient(1deg, rgba(208, 212, 194, 1) 0%, rgba(208, 212, 194, 0.5) 25%, rgba(125, 152, 133, 0) 100%)";
const darkBottomLeft =
  "linear-gradient(-1deg, rgba(28, 57, 79, 1) 0%, rgba(28, 57, 79, 0.5) 25%, rgba(125, 152, 133, 0) 100%)";
const darkBottomRight =
  "linear-gradient(-1deg, rgba(28, 57, 79, 1) 25%, rgba(28, 57, 79, 0.5) 50%, rgba(28, 57, 79, 0) 75%)";
const darkTopLeft =
  "linear-gradient(1deg, rgba(125, 152, 133, 0) 0%, rgba(28, 57, 79, 0.5) 75%, rgba(28, 57, 79, 1) 100%)";
const darkTopRight =
  "linear-gradient(-1deg,rgba(28, 57, 79, 0) 25%, rgba(28, 57, 79, 0.5) 50%, rgba(28, 57, 79, 1) 75%)";
const topLeft =
  "linear-gradient(-1deg, rgba(208, 212, 194, 0) 25%, rgba(208, 212, 194, 0.5) 50%, rgba(208, 212, 194, 1) 75%)";
const topRight =
  "linear-gradient(-1deg, rgba(125, 152, 133, 0) 0%, rgba(208, 212, 194, 0.5) 75%, rgba(208, 212, 194, 1) 100%)";

// BACKGROUND-IMAGES:
const hero =
  "linear-gradient(0deg, rgb(211, 215, 196, 0), rgb(211, 215, 196, 0.3)), url('/images/farinera_day.jpg')";
const darkHero =
  "linear-gradient(0deg, rgb(28, 57, 79, 0), rgb(28, 57, 79, 0.7)), url('/images/farinera_night.jpg')";
const ourStoryMobile =
  "linear-gradient(0deg, rgba(208, 212, 194, 0.8), rgba(208, 212, 194, 0.8)), url('/images/our_story.jpg')";
const ourStory =
  "linear-gradient(95deg, rgba(208, 212, 194, 1) 10%, rgba(208, 212, 194, 0) 20%, rgba(208, 212, 194, 0) 80%, rgba(208, 212, 194, 1) 90%),  url('/images/our_story.jpg')";
const ourStory2 =
  "linear-gradient( 95deg, rgba(208, 212, 194, 1) 0%, rgba(208, 212, 194, 1) 40%, rgba(208, 212, 194, 0.8) 60%, rgba(125, 152, 133, 1) 100%)";
const darkOurStoryMobile =
  "linear-gradient(0deg, rgba(28, 57, 79, 0.8), rgba(28, 57, 79, 0.8)), url('/images/test2.jpeg')";
const darkOurStory =
  "linear-gradient(85deg, rgba(28, 57, 79, 1) 10%, rgba(28, 57, 79, 0) 20%, rgba(28, 57, 79, 0) 80%, rgba(28, 57, 79, 1) 90%), url('/images/test2.jpeg')";
const darkOurStory2 =
  "linear-gradient(95deg, rgba(16, 24, 39, 1) 0%, rgba(28, 57, 79, 0.8) 40%, rgba(28, 57, 79, 1) 60%, rgba(28, 57, 79, 1) 100%)";
const schedule =
  "linear-gradient(0deg, rgb(211, 215, 196, 0), rgb(211, 215, 196, 0.3)), url('/images/dock.jpg')";
const darkSchedule =
  "linear-gradient(0deg,  rgb(28, 57, 79, 0), rgb(28, 57, 79, 0.7)), url('/images/dock.jpg')";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#7c9885",
        secondary: "#d4a373",
        accent: "#e9d8a6",
        dark: "#1c394f",
        light: "#d4d8c5",
      },
      backgroundImage: {
        hero,
        darkHero,
        ourStoryMobile,
        ourStory,
        ourStory2,
        darkOurStoryMobile,
        darkOurStory,
        darkOurStory2,
        schedule,
        darkSchedule,
        bottomLeft,
        bottomRight,
        darkBottomLeft,
        darkBottomRight,
        darkTopLeft,
        darkTopRight,
        topLeft,
        topRight,
      },
    },
  },
  plugins: [],
};
