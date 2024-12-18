import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app2',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext', // Asegúrate de que el código se compile para ES modules
    minify: false, // Evita que se minimice el código durante el desarrollo
    rollupOptions: {
      output: {
        format: 'es', // Asegúrate de que el archivo se genere como un módulo ES
      },
    },
  },
  server: {
    port: 5002
  }
});