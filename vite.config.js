import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "#components": resolve(rootDir, "src/components"),
      "#constants": resolve(rootDir, "src/constants"),
      "#store": resolve(rootDir, "src/store"),
      "#hoc": resolve(rootDir, "src/hoc"),
      "#windows": resolve(rootDir, "src/windows"),
    },
  },
});
