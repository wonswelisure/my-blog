/*
 * @Author: wosls
 * @Date: 2023-08-04 11:37:04
 * @LastEditors: wosls
 * @LastEditTime: 2023-11-30 16:15:57
 * @FilePath: \myblog\vite.config.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import inject from '@rollup/plugin-inject'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

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
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
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
