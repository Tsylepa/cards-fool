import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/cards-fool/",
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
