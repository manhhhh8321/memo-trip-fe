import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@router": path.resolve(__dirname, "./src/router"),
            "@common": path.resolve(__dirname, "./src/common"),
            "@layouts": path.resolve(__dirname, "./src/layouts"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@interfaces": path.resolve(__dirname, "./src/interfaces"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@configs": path.resolve(__dirname, ".src/configs"),
            "@api": path.resolve(__dirname, "./src/api"),
            "@redux": path.resolve(__dirname, "./src/redux"),
            "@modules": path.resolve(__dirname, "./src/modules"),
            "@translations": path.resolve(__dirname, "./src/translations"),
            "@validations": path.resolve(__dirname, "./src/validations"),
            "@enums": path.resolve(__dirname, "./src/enums"),
            "@assets": path.resolve(__dirname, "./src/assets"),
        },
    },
});
