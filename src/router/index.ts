/*
 * @Author: wangbing wangbing
 * @Date: 2023-08-04 11:37:04
 * @LastEditors: wangbing wangbing
 * @LastEditTime: 2023-12-05 11:22:20
 * @FilePath: \myblog\src\router\index.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
/*
 * @Author: wosls
 * @Date: 2023-08-04 11:37:04
 * @LastEditors: wangbing wangbing
 * @LastEditTime: 2023-12-05 11:16:23
 * @FilePath: \myblog\src\router\index.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '@/layout/index.vue'
import picture from './modules/picture'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue')
    },
    // {
    //   path: '/wosls',
    //   component: Layout,
    //   children: [
    //     {
    //       path: '/wosls/about',
    //       component: () => import('../views/AboutView.vue'),
    //     },
    //     {
    //       path: '/wosls/main',
    //       component: () => import('../views/HomeView.vue'),
    //     }
    //   ]
    // },
    picture,
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/FirstPage',
    //   name: 'FirstPage',
    //   component: () => import('../views/FirstPage.vue')
    // },
    {
      path: '/ArticleDetails',
      name: 'ArticleDetails',
      component: () => import('../views/Blog/ArticleDetails.vue')
    },

  ]
})

export default router
