import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projectDetails: resolve(__dirname, 'project-details.html'),
        sportifyDetails: resolve(__dirname, 'sportify-details.html'),
        raanicreamDetails: resolve(__dirname, 'raanicream-details.html'),
        smartcampusDetails: resolve(__dirname, 'smartcampus-details.html'),
        myLinks: resolve(__dirname, 'my-links.html'),
        githubStats: resolve(__dirname, 'github-stats.html')
      }
    }
  }
});
