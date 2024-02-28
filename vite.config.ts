import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path, { format } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'gc-ui',
            fileName: `index.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                react: 'React',
                'react-dom': 'ReactDom'
            }
        },
        sourcemap: false,
        emptyOutDir: true
    },

    plugins: [react(), dts()]
});
