// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://Moh4mmedKhan.github.io",
  base: "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
