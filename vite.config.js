import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: [
        "vue", // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        "vue-router",
        "pinia",
      ],
      // 配置哪些本地目录支持自动引入
      dirs: [
        "./src/utils/**",
        "./src/api",
        "./src/stores",
        "./src/routers",
        "./src/hooks",
      ],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      // 配置本地组件库的自动引入
      dirs: ["src/components"], // './src/components'
    }),
  ],
});
