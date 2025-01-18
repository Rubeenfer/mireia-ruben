/** @type {import('tailwindcss').Config} */
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
        hero: `linear-gradient(0deg,
        rgb(211, 215, 196, 0),
        rgb(211, 215, 196, 0.3)),
        url("/images/farinera_day.jpg")`,

        "hero-dark": `linear-gradient(0deg,
        rgb(28, 57, 79, 0),
        rgb(28, 57, 79, 0.7)),
        url("/images/farinera_night.jpg")`,

        "our-story-mobile": `linear-gradient(0deg,
        rgba(208, 212, 194, 0.8),
        rgba(208, 212, 194, 0.8)),
        url('/images/our_story.jpg')`,

        "our-story": `linear-gradient(95deg,
        rgba(208, 212, 194, 1) 10%,
        rgba(208, 212, 194, 0) 20%,
        rgba(208, 212, 194, 0) 80%,
        rgba(208, 212, 194, 1) 90%
        ),
        url("/images/our_story.jpg")`,
        "our-story-2": `linear-gradient(
          95deg,
          rgba(208, 212, 194, 1) 0%,
          rgba(208, 212, 194, 1) 40%,
          rgba(208, 212, 194, 0.8) 60%,
          rgba(125, 152, 133, 1) 100%
        )`,

        "our-story-dark-mobile": `linear-gradient(0deg,
        rgba(28, 57, 79, 0.8),
        rgba(28, 57, 79, 0.8)),
        url('/images/test2.jpeg')`,

        "our-story-dark": `linear-gradient(85deg,
       rgba(28, 57, 79, 1) 10%,
       rgba(28, 57, 79, 0) 20%,
    rgba(28, 57, 79, 0) 80%,
        rgba(28, 57, 79, 1) 90%),
        url("/images/test2.jpeg")`,

        "our-story-dark-2": `linear-gradient(
          95deg,
          rgba(16, 24, 39, 1) 0%,
          rgba(28, 57, 79, 0.8) 40%,
          rgba(28, 57, 79, 1) 60%,
          rgba(28, 57, 79, 1) 100%
        )`,

        schedule: `linear-gradient(0deg,
        rgb(211, 215, 196, 0),
        rgb(211, 215, 196, 0.3)),
        url("/images/dock.jpg")`,

        "schedule-dark": `linear-gradient(0deg,
        rgb(28, 57, 79, 0),
        rgb(28, 57, 79, 0.7)),
        url("/images/dock.jpg")`,
      },
    },
  },
  plugins: [],
};
