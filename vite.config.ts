import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio/",  // Mets le nom de ton repo GitHub ici
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
