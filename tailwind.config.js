/** @type {import('tailwindcss').Config} */

// COLORS:
const dark = "#101827";
const leaf = "#7D9885";
const sky = "#1c394f";
const olive = "#d0d4c2";
const cream = "#f9f5f0";
const transparent = "#00000000";

// IMAGES:
const farineraDay = "/images/farinera_day.jpg";
const farineraNight = "/images/farinera_night.jpg";
const ourStoryDay = "/images/our_story.jpg";
const ourStoryNight = "/images/test2.jpeg";
const dock = "/images/dock.jpg";

// RADIAL-COLORS:

const night_0_0 = `radial-gradient(circle at 0% 0%,  ${dark} 5vw, ${sky} 50vw, ${sky} 100vw)`;
const night_0_100 = `radial-gradient(circle at 0% 100%,  ${dark} 5vw, ${sky} 50vw, ${sky} 100vw)`;
const night_100_0 = `radial-gradient(circle at 100% 0%,  ${dark} 5vw, ${sky} 50vw, ${sky} 100vw)`;
const night_100_100 = `radial-gradient(circle at 100% 100%,  ${dark} 5vw, ${sky} 50vw, ${sky} 100vw)`;

const day_0_0 = `radial-gradient(circle at 0% 0%,  ${leaf} 5vw, ${olive} 50vw, ${olive} 100vw)`;
const day_0_100 = `radial-gradient(circle at 0% 100%,  ${leaf} 5vw, ${olive} 50vw, ${olive} 100vw)`;
const day_100_0 = `radial-gradient(circle at 100% 0%,  ${leaf} 5vw, ${olive} 50vw, ${olive} 100vw)`;
const day_100_100 = `radial-gradient(circle at 100% 100%,  ${leaf} 5vw, ${olive} 50vw, ${olive} 100vw)`;

// LINEAR-COLORS:
const oliveOverlay = `linear-gradient(0deg, ${transparent} 0%, ${olive} 50%)`;
const oliveOverlayReverse = `linear-gradient(0deg, ${olive} 50%, ${transparent} 100%)`;

const nightOverlay = `linear-gradient(0deg, ${transparent} 0%, ${sky} 50%)`;
const nightOverlayReverse = `linear-gradient(0deg, ${sky} 50%, ${transparent} 100%)`;

// BACKGROUND-IMAGES:
const hero = `linear-gradient(0deg, ${transparent}, ${leaf}CC), url(${farineraDay})`;
const darkHero = `linear-gradient(0deg, ${transparent}, ${dark}CC), url(${farineraNight})`;

const ourStoryMobile = `linear-gradient(0deg, ${olive}CC, ${olive}CC), url(${ourStoryDay})`;
const ourStory = `linear-gradient(95deg, ${olive} 10%, ${transparent} 20%, ${transparent} 80%, ${olive} 90%),  url(${ourStoryDay})`;
const darkOurStoryMobile = `linear-gradient(0deg, ${sky}CC, ${sky}CC), url(${ourStoryNight})`;
const darkOurStory = `linear-gradient(85deg, ${sky} 10%, ${transparent} 20%, ${transparent} 80%, ${sky} 90%), url(${ourStoryNight})`;

const schedule = `linear-gradient(0deg, ${transparent}, ${leaf}CC), url(${dock})`;
const darkSchedule = `linear-gradient(0deg,  ${transparent}, ${dark}CC), url(${dock})`;

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#e9d8a6",
        cream,
        dark,
        leaf,
        light: "#d4d8c5",
        primary: "#7c9885",
        secondary: "#d4a373",
        sky,
        olive,
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
