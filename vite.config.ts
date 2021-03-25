import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["iife", "es"],
      name: "Syntax",
    },
  },
});
