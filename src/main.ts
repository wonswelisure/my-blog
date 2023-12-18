/*
 * @Author: wosls
 * @Date: 2023-08-04 11:37:04
 * @LastEditors: wosls
 * @LastEditTime: 2023-12-18 10:17:33
 * @FilePath: \myblog\src\main.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './permission'//权限

import App from './App.vue'
import router from './router'
import jquery from 'jquery'
import '@/styles/index.scss'
// 导入 element-plus
import ElementPlus from "element-plus";
// 导入 element-plus 样式
import "element-plus/dist/index.css";
// 导入 element-plus 图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// // 导入全局样式
// import "@/styles/index.scss";
// 创建 vue 实例
const app = createApp(App)


app.use(createPinia())
app.use(router)

app.mount('#app')



// 使用router\vuex\element-plus并挂载
// app.use(ElementPlus).use(router).use(store).mount("#app");
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}