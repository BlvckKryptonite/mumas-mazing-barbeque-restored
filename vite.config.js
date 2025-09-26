import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    // For local development only - no proxy needed since API calls will go to Netlify Functions
  },
  build: {
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
    sourcemap: false, // Reduce bundle size
    minify: 'terser',
    cssMinify: true
  },
  // Ensure base path is correct for Netlify
  base: '/'
});