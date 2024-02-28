import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({

  // devtools: { enabled: false },
  
  modules: [
    "@nuxtjs/tailwindcss",
    //  "@nuxt/ui",
  ],
  buildModules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
      backendUrl: "http://localhost:8000",
      frontendUrl: "http://localhost:3000",
    },
  },
  imports: {
    dirs: ["./utils"],
  },
  experimental: {
    asyncContext: true,
  },
build: {
    css: {
      extract: true,
      // other CSS-related configurations
    },
    // other build configurations
  }
});
