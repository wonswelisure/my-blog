<!--
 * @Author: wosls
 * @Date: 2023-08-04 11:37:04
 * @LastEditors: wosls
 * @LastEditTime: 2023-12-18 14:46:58
 * @FilePath: \myblog\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

onMounted(() => {})
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/ArticleDetails">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <!-- <div id="app">
    
  </div> -->
  <RouterView />
  <!-- 回到顶部 -->
  <!-- <el-backtop :bottom="100">
    <div
      style="
        height: 100%;
        width: 100%;
        font-size: 13px;
        border-radius: 40px;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      "
    >
      <el-icon><Top /></el-icon>
    </div>
  </el-backtop> -->
</template>

<style>


:root {
  --theme-color: #19b1f5;
  --text-color: #4c4948;
  --card-box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);
}

::selection {
  background: var(--theme-color);
  color: #fff;
}
</style>
