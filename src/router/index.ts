/*
 * @Author: wangbing wangbing
 * @Date: 2023-08-04 11:37:04
 * @LastEditors: wangbing wangbing
 * @LastEditTime: 2023-11-30 10:56:20
 * @FilePath: \myblog\src\router\index.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/FirstPage',
      name: 'FirstPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FirstPage.vue')
    },
    {
      path: '/ArticleDetails',
      name: 'ArticleDetails',
      component: () => import('../views/Blog/ArticleDetails.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue')
    }
  ]
})

export default router
