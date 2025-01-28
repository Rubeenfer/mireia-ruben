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
        hero,
        nightOverlay,
        nightOverlayReverse,
        oliveOverlay,
        oliveOverlayReverse,
        ourStory,
        ourStoryMobile,
        young: `url("/images/young.jpg")`,
        adult: `url("/images/adult.jpg")`,
        melos: `url("/images/melos.jpeg")`,
        orada: `url("/images/orada.jpeg")`,
        veggie: `url("/images/veggie.jpg")`,
      },
    },
  },
  plugins: [],
};
