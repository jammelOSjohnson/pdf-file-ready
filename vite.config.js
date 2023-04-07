/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      short_name: "CrushRoadJA",
      name: "Crush Road JA",
      manifest: {
        icons: [
          {
            src: "favicon.ico",
            sizes: "48x48",
            type: "image/x-icon",
            purpose: "maskable",
          },
          {
            src: "192x192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "512x512.png",
            type: "image/png",
            sizes: "512x512",
          },
        ],
        id: "/",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff",
        orientation: "portrait-primary",
      },
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
  },
});
