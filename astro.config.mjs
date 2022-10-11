import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  output: "server",
  adapter: cloudflare({ mode: 'directory'})
});