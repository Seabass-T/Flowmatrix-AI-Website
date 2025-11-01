// This fixes the "Cannot access 'w' before initialization" error
// by ensuring React is properly hoisted and initialized

export function fixReactImports() {
  return {
    name: 'fix-react-imports',
    config(config) {
      // Ensure React is optimized as a singleton
      if (!config.optimizeDeps) {
        config.optimizeDeps = {};
      }

      if (!config.optimizeDeps.include) {
        config.optimizeDeps.include = [];
      }

      if (!config.optimizeDeps.include.includes('react')) {
        config.optimizeDeps.include.push('react');
        config.optimizeDeps.include.push('react-dom');
      }

      // Make sure React is properly externalized
      if (!config.build) {
        config.build = {};
      }

      if (!config.build.rollupOptions) {
        config.build.rollupOptions = {};
      }

      if (!config.build.rollupOptions.external) {
        config.build.rollupOptions.external = [];
      }

      return config;
    }
  };
}
