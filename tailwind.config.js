/** @type {import('tailwindcss').Config} */

// COLORS:
const dark = "#101827";
const leaf = "#86895d";
const sky = "#1c394f";
const olive = "#dcdac3";
const cream = "#FFFFFF";
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

const night2_0_0 = `radial-gradient(circle at 0% 0%,  ${sky} 5vw, ${dark} 50vw, ${dark} 100vw)`;
const night2_0_100 = `radial-gradient(circle at 0% 100%,  ${sky} 5vw, ${dark} 50vw, ${dark} 100vw)`;
const night2_100_0 = `radial-gradient(circle at 100% 0%,  ${sky} 5vw, ${dark} 50vw, ${dark} 100vw)`;
const night2_100_100 = `radial-gradient(circle at 100% 100%,  ${sky} 5vw, ${dark} 50vw, ${dark} 100vw)`;

const day_0_0 = `radial-gradient(circle at 0% 0%,  ${leaf} 5vw, ${olive} 50vw, ${olive} 100vw)`;
const day_0_100 = `radial-gradient(circle at 0% 100%,  ${leaf} 5vw, ${olive} 50vw, ${olive} 100vw)`;
const day_100_0 = `radial-gradient(circle at 100% 0%,  ${leaf} 5vw, ${olive} 50vw, ${olive} 100vw)`;
const day_100_100 = `radial-gradient(circle at 100% 100%,  ${leaf} 5vw, ${olive} 50vw, ${olive} 100vw)`;

const day2_0_0 = `radial-gradient(circle at 0% 0%,  ${olive} 5vw, ${leaf} 50vw, ${leaf} 100vw)`;
const day2_0_100 = `radial-gradient(circle at 0% 100%,  ${olive} 5vw, ${leaf} 50vw, ${leaf} 100vw)`;
const day2_100_0 = `radial-gradient(circle at 100% 0%,  ${olive} 5vw, ${leaf} 50vw, ${leaf} 100vw)`;
const day2_100_100 = `radial-gradient(circle at 100% 100%,  ${olive} 5vw, ${leaf} 50vw, ${leaf} 100vw)`;

// LINEAR-COLORS:
const oliveOverlay = `linear-gradient(0deg, ${transparent} 0%, ${olive} 50%)`;
const oliveOverlayReverse = `linear-gradient(0deg, ${olive} 50%, ${transparent} 100%)`;

const nightOverlay = `linear-gradient(0deg, ${transparent} 0%, ${dark} 50%)`;
const nightOverlayReverse = `linear-gradient(0deg, ${dark} 50%, ${transparent} 100%)`;

// BACKGROUND-IMAGES:
const hero = `linear-gradient(0deg, ${transparent}, ${leaf}4d), url(${farineraDay})`;
const darkHero = `linear-gradient(0deg, ${transparent}, ${dark}4d), url(${farineraNight})`;

const ourStoryMobile = `linear-gradient(0deg, ${olive}CC, ${olive}CC), url(${ourStoryDay})`;
const ourStory = `linear-gradient(95deg, ${olive} 10%, ${transparent} 20%, ${transparent} 80%, ${olive} 90%),  url(${ourStoryDay})`;
const darkOurStoryMobile = `linear-gradient(0deg, ${dark}CC, ${dark}CC), url(${ourStoryNight})`;
const darkOurStory = `linear-gradient(85deg, ${dark} 10%, ${transparent} 20%, ${transparent} 80%, ${dark} 90%), url(${ourStoryNight})`;

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
        day2_0_0,
        day2_0_100,
        day2_100_0,
        day2_100_100,
        hero,
        night_0_0,
        night_0_100,
        night_100_0,
        night_100_100,
        night2_0_0,
        night2_0_100,
        night2_100_0,
        night2_100_100,
        nightOverlay,
        nightOverlayReverse,
        oliveOverlay,
        oliveOverlayReverse,
        ourStory,
        ourStoryMobile,
        schedule,
        young: `url("/images/young.jpg")`,
        adult: `url("/images/adult.jpg")`,
      },
    },
  },
  plugins: [],
};
