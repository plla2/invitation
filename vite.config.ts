import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
