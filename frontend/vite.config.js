import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/static/',
    publicDir: path.resolve(__dirname, './static'),
    build: {
        manifest: true,
        outDir: path.resolve(__dirname, '../backend/static'),  // Output build files to Django's static directory
        emptyOutDir: true,
        sourcemap: true // Add sourcemap
    },
});
