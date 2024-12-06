import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    eslint({
      include: ['src/**/*.js', 'src/**/*.jsx'] // Certifica-se de verificar apenas os arquivos em src
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
});
