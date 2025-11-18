import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `@use "../styles/variables.scss" as *;`
        }
      }
    }
  }
});

