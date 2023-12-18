/*
 * @Author: wosls
 * @Date: 2023-09-21 16:25:18
 * @LastEditors: wosls
 * @LastEditTime: 2023-12-07 14:35:50
 * @FilePath: \myblog\src\permission.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import router from '../src/router' //导入路由
// 白名单,
const whiteList = ['/home', '/ArticleDetails', '/login', '/applylist', '/rules', '/about', '/main', '/admin', '/spefevue']; //定义白名单

// 路由守卫
router.beforeEach((to, from, next) => {
    console.log('toooo',to);
    console.log('from',from);
    if (to.name === "home") {
        next('MainPage');
    } else {
        next();
    }
});
router.afterEach(() => {
    console.log('路由加载完成！');
});
