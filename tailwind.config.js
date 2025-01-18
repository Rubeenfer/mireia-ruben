/** @type {import('tailwindcss').Config} */

// COLORS:
const darkBlue = "rgba(16, 24, 39, 1)";
const darkblue80 = "rgba(16, 24, 39, 0.8)";
const darkGreen = "rgba(125, 152, 133, 1)";
const darkGreen80 = "rgba(125, 152, 133, 0.8)";
const lightBlue = "rgba(28, 57, 79, 1)";
const lightBlue80 = "rgba(28, 57, 79, 0.8)";
const lightGreen = "rgba(208, 212, 194, 1)";
const lightGreen80 = "rgba(208, 212, 194, 0.8)";
const transparent = "rgb(0, 0, 0, 0)";

// IMAGES:
const farineraDay = "/images/farinera_day.jpg";
const farineraNight = "/images/farinera_night.jpg";
const ourStoryDay = "/images/our_story.jpg";
const ourStoryNight = "/images/test2.jpeg";
const dock = "/images/dock.jpg";

// RADIAL-COLORS:

const night_0_0 = `radial-gradient(circle at 0% 0%,  ${darkBlue} 5vw, ${lightBlue} 50vw, ${lightBlue} 100vw)`;
const night_0_100 = `radial-gradient(circle at 0% 100%,  ${darkBlue} 5vw, ${lightBlue} 50vw, ${lightBlue} 100vw)`;
const night_100_0 = `radial-gradient(circle at 100% 0%,  ${darkBlue} 5vw, ${lightBlue} 50vw, ${lightBlue} 100vw)`;
const night_100_100 = `radial-gradient(circle at 100% 100%,  ${darkBlue} 5vw, ${lightBlue} 50vw, ${lightBlue} 100vw)`;

const day_0_0 = `radial-gradient(circle at 0% 0%,  ${darkGreen} 5vw, ${lightGreen} 50vw, ${lightGreen} 100vw)`;
const day_0_100 = `radial-gradient(circle at 0% 100%,  ${darkGreen} 5vw, ${lightGreen} 50vw, ${lightGreen} 100vw)`;
const day_100_0 = `radial-gradient(circle at 100% 0%,  ${darkGreen} 5vw, ${lightGreen} 50vw, ${lightGreen} 100vw)`;
const day_100_100 = `radial-gradient(circle at 100% 100%,  ${darkGreen} 5vw, ${lightGreen} 50vw, ${lightGreen} 100vw)`;

// LINEAR-COLORS:
const oliveOverlay = `linear-gradient(0deg, ${transparent} 0%, ${lightGreen} 50%)`;
const oliveOverlayReverse = `linear-gradient(0deg, ${lightGreen} 50%, ${transparent} 100%)`;

const nightOverlay = `linear-gradient(0deg, ${transparent} 0%, ${lightBlue} 50%)`;
const nightOverlayReverse = `linear-gradient(0deg, ${lightBlue} 50%, ${transparent} 100%)`;

// BACKGROUND-IMAGES:
const hero = `linear-gradient(0deg, ${transparent}, ${darkGreen80}), url(${farineraDay})`;
const darkHero = `linear-gradient(0deg, ${transparent}, ${darkblue80}), url(${farineraNight})`;

const ourStoryMobile = `linear-gradient(0deg, ${lightGreen80}, ${lightGreen80}), url(${ourStoryDay})`;
const ourStory = `linear-gradient(95deg, ${lightGreen} 10%, ${transparent} 20%, ${transparent} 80%, ${lightGreen} 90%),  url(${ourStoryDay})`;
const darkOurStoryMobile = `linear-gradient(0deg, ${lightBlue80}, ${lightBlue80}), url(${ourStoryNight})`;
const darkOurStory = `linear-gradient(85deg, ${lightBlue} 10%, ${transparent} 20%, ${transparent} 80%, ${lightBlue} 90%), url(${ourStoryNight})`;

const schedule = `linear-gradient(0deg, ${transparent}, ${darkGreen80}), url(${dock})`;
const darkSchedule = `linear-gradient(0deg,  ${transparent}, ${darkblue80}), url(${dock})`;

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
        darkGreen,
      },
      backgroundImage: {
        darkHero,
        darkOurStory,
        darkOurStoryMobile,
        darkSchedule,
        day_0_0,
        day_0_100,
        day_100_0,
        day_100_100,
        hero,
        night_0_0,
        night_0_100,
        night_100_0,
        night_100_100,
        nightOverlay,
        nightOverlayReverse,
        oliveOverlay,
        oliveOverlayReverse,
        ourStory,
        ourStoryMobile,
        schedule,
      },
    },
  },
  plugins: [],
};
