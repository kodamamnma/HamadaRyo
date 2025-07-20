import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/configs
export default defineConfig({
  site: "https://hamada-ryo.vercel.app/",
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel(),
});