import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Default base for the app
  build: {
    rollupOptions: {
      // Ensure proper fallback for SPA routing
      output: {
        manualChunks: undefined, // Ensures routes work as expected
      },
    },
  },
});
