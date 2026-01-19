import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  assetsInclude: ["**/*.webp"],

  // Dev = root (/)
  // Build = relative paths (works anywhere)
  base: command === "build" ? "./" : "/",
}));
