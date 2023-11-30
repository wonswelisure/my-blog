import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import inject from '@rollup/plugin-inject'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    /**
     * @description:这里会自动载入 node_modules 中的 jquery jquery全局变量
     * @return {*}
     */     
    inject({
      $: 'jquery', 
      jQuery: 'jquery',
      'windows.jQuery': 'jquery'
    })
  ],
  css: {
    /**
     * @description:css预处理器
     * @return {*}
     */    
    preprocessorOptions: {
      /**
       * @description: 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
       * @return {*}
       */      
      scss: {
        additionalData: '@import "@/styles/mixin.scss";'
      }
    }
  },
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
