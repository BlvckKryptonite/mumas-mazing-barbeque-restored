import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
<<<<<<< HEAD
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
=======
    port: 3000,
    // For local development only - no proxy needed since API calls will go to Netlify Functions
  },
  build: {
>>>>>>> 4f72be58eead862b21e683ea988cac433ab2c384
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
<<<<<<< HEAD
    sourcemap: false,
=======
    sourcemap: false, // Reduce bundle size
>>>>>>> 4f72be58eead862b21e683ea988cac433ab2c384
    minify: 'terser',
    cssMinify: true
  },
  // Ensure base path is correct for Netlify
  base: '/'
<<<<<<< HEAD
});
=======
});
>>>>>>> 4f72be58eead862b21e683ea988cac433ab2c384
