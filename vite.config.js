import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    hmr: {
      clientPort: 443
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 5000
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          stripe: ['@stripe/stripe-js']
        }
      }
    },
    // Optimize for Netlify
    sourcemap: false,
    minify: 'terser',
    cssMinify: true
  },
  // Ensure base path is correct for Netlify
  base: '/'
});
