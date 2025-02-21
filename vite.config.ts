import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    chunkSplitPlugin({
      strategy: "unbundle", // This automatically splits large dependencies
    }),
    viteCompression({
      algorithm: "brotliCompress", // Or 'gzip'
    }),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        // Workbox configuration here
        globPatterns: ["**/*.{js,css,html,png,jpg,svg,gif}"], // Cache these asset types
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // Increase cache size to 10 MB
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/i,
            handler: "CacheFirst", // Use CacheFirst strategy for images
            options: {
              cacheName: "image-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 365, // Cache for 1 year
              },
            },
          },
          {
            urlPattern: /\.(?:mp4|webm)$/i,
            handler: "StaleWhileRevalidate", // Use StaleWhileRevalidate for video files
            options: {
              cacheName: "video-cache",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365, // Cache for 1 year
              },
            },
          },
        ],
      },
      manifest: {
        name: "My Vite PWA",
        short_name: "VitePWA",
        theme_color: "#ffffff",
        // icons: [
        //   {
        //     src: "/icon-192x192.png",
        //     sizes: "192x192",
        //     type: "image/png",
        //   },
        // ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          // creating a chunk to react routes deps. Reducing the vendor chunk size
          if (id.includes("react-router-dom") || id.includes("react-router")) {
            return "@react-router";
          }
          if (id.includes("react-dom") || id.includes("react")) {
            return "@react";
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
