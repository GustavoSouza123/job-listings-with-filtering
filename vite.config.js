import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/job-listings-with-filtering/',
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    const info = assetInfo.name.split('.');
                    const extType = info[info.length - 1];
                    if (/\.(png|jpe?g|gif|svg|webp|webm|mp3)$/.test(assetInfo.name)) {
                        return `public/[name]-[hash].${extType}`;
                    }
                    if (/\.(css)$/.test(assetInfo.name)) {
                        return `assets/[name]-[hash].${extType}`;
                    }
                    return `[name]-[hash].${extType}`;
                },
            },
        },
    },
})
