const path = require("path");
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";

export default {
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    host: true,
  },
  plugins: [
    vue(),
    Components({
      include: [/\.vue$/, /\.vue\?vue/],
    }),
  ],
};
