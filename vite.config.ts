import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
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
        // Simplified code splitting - let Vite handle React automatically
        // Only split truly large libraries to optimize caching
        manualChunks: (id) => {
          // Split Lucide icons separately (1.1MB bundle!)
          if (id.includes('lucide-react')) {
            return 'lucide-icons';
          }
          // Supabase client (large bundle)
          if (id.includes('node_modules/@supabase')) {
            return 'supabase';
          }
          // Radix UI components (large bundle)
          if (id.includes('node_modules/@radix-ui')) {
            return 'radix-ui';
          }
          // TanStack Query
          if (id.includes('node_modules/@tanstack')) {
            return 'tanstack-query';
          }
          // React Router
          if (id.includes('node_modules/react-router')) {
            return 'react-router';
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
