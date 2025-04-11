import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcssVite from '@tailwindcss/vite';


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [tailwindcssVite(), react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: './',
});
