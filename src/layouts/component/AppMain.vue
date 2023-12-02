<!--
 * @Author: wangbing wangbing
 * @Date: 2023-11-30 17:42:39
 * @LastEditors: wangbing wangbing
 * @LastEditTime: 2023-12-02 15:54:49
 * @FilePath: \myblog\src\layouts\component\AppMain.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <section class="app-main">
    <!--tab -->
    <div class="tab-content">
      <el-tabs
        v-model="activeIndex"
        type="border-card"
        closable
        v-if="openTab.length"
        @tab-click="tabClick"
        @tab-remove="tabRemove"
      >
        <template v-for="item in openTab" :key="item.route">
          <el-tab-pane  :label="item.name" :name="item.route">
            <span v-if="item.route === '/statusMonitor/main'">
              <i class="el-icon-s-home"></i>
            </span>
          </el-tab-pane>
        </template>
      </el-tabs>
    </div>
    <div class="content-wrap">
      <router-view />
    </div>
  </section>
</template>
  
<script setup lang="ts">
import { reactive, ref } from 'vue'
const openTab = reactive([
  { name: '首页', route: '/statusMonitor/main' },
  { name: '用户', route: '/main/user' },
  { name: '欢迎', route: '/main/welcome' }
])
const activeIndex = ref('')
const tabClick = () => {
  alert(1)
}
const tabRemove = () => {
  alert(2)
}
</script>
  
<style lang="scss" scoped>
</style>