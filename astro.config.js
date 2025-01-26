import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), react()],
  env: {
    schema: {
      API_SECRET: envField.string({ context: "server", access: "secret" }),
    },
  },
});
