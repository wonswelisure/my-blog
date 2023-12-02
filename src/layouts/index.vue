<!--
 * @Author: wangbing wangbing
 * @Date: 2023-11-30 15:44:25
 * @LastEditors: wangbing wangbing
 * @LastEditTime: 2023-12-02 17:20:47
 * @FilePath: \myblog\src\layouts\index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="app-wrapper">
    <!-- <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" /> -->

    <div class="main-container">
      <div
        v-if="!$route.meta.isHideNav"
        class="sidebar-container"
        :class="{ 'sidebar-hidden': navStatus }"
      >
        <sidebar v-if="routes" />
        <div class="nav-toggle" @click="toggleNavStatus()">
          <i class="el-icon-s-fold" v-if="!navStatus"></i>
          <i class="el-icon-s-unfold" v-if="navStatus"></i>
          <!-- <img src="@/assets/images/s.png" alt="" v-if="!navStatus" />
          <img src="@/assets/images/zhankai.png" alt="" v-if="navStatus" />-->
        </div>
        <div class="refresh-button">
          <!-- 刷新按钮 -->
          <!-- <i class="el-icon-refresh-right"></i> -->
        </div>
      </div>
      <!-- <div :class="{'fixed-header':fixedHeader}">
		<tags-view v-if="needTagsView" />
      </div>-->
      <div class="main-container-content">
        <navbar />
        <app-main />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const openTab = reactive([
  { name: '首页', route: '/statusMonitor/main' },
  { name: '用户', route: '/main/user' },
  { name: '欢迎', route: '/main/welcome' }
])
const routes = reactive([
  { name: '首页', route: '/statusMonitor/main' },
  { name: '用户', route: '/main/user' },
  { name: '欢迎', route: '/main/welcome' }
])

const toggleNavStatus = () => {
  alert(2)
}
const navStatus = ref(false)
</script>

<style lang="scss" scoped>
.app-wrapper {
  background-color: red;
}
</style>
