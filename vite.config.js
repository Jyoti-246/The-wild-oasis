import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnError: false, // 🚫 don’t stop UI on ESLint error
      failOnWarning: false, // 🚫 don’t stop UI on warning
    }),
  ],
});
