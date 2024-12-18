import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        app1: {
          name: 'app1',
          type: 'module',
          entry: 'http://localhost:5001/remoteEntry.js'
        },
        app2: {
          name: 'app2',
          type: 'module',
          entry: 'http://localhost:5002/remoteEntry.js'
        }
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
  server: {
    port: 5000
  }
});