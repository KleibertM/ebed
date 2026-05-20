import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './', // Ruta al directorio raíz del proyecto
  plugins: [react()],
});
