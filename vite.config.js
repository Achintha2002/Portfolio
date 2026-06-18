import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projectDetails: resolve(__dirname, 'project-details.html'),
        sportifyDetails: resolve(__dirname, 'sportify-details.html')
      }
    }
  }
});
