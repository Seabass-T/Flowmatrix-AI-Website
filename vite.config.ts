import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize bundle size - use ES2020 for smaller output
    target: 'es2020',
    minify: 'esbuild',
    // Enable CSS code splitting
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Aggressive code splitting for optimal caching
        manualChunks: (id) => {
          // Split Lucide icons separately (1.1MB bundle!)
          if (id.includes('lucide-react')) {
            return 'lucide-icons';
          }
          // React core libraries
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-core';
          }
          // React Router
          if (id.includes('node_modules/react-router')) {
            return 'react-router';
          }
          // Supabase client
          if (id.includes('node_modules/@supabase')) {
            return 'supabase';
          }
          // Radix UI components
          if (id.includes('node_modules/@radix-ui')) {
            return 'radix-ui';
          }
          // TanStack Query
          if (id.includes('node_modules/@tanstack')) {
            return 'tanstack-query';
          }
          // All other node_modules
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 500, // Warn for chunks >500KB
  },
});
