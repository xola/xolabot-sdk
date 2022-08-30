import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'build',
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'XolaBotSDK',
            fileName: 'main',
        },
    },
});
