import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: 'dist',
        cssCodeSplit: true,
        cssMinify: "lightningcss"
    }
})