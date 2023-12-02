<!--
 * @Author: wangbing wangbing
 * @Date: 2023-11-30 17:42:39
 * @LastEditors: wangbing wangbing
 * @LastEditTime: 2023-12-02 17:40:08
 * @FilePath: \myblog\src\layouts\component\SideBar\index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div style="height: 100%">
    <div class="logo">
      <span v-if="!isCollapse" class="logo-png"></span>
      <span v-if="!isCollapse" class="logo-title">{{ title }}</span>
      <span v-if="isCollapse" class="min-logo"></span>
    </div>
    <el-scrollbar style="height: calc(100% - 100px)" wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="defaultPath"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        router
      >
        <el-submenu v-for="(item, index) in menuList" :key="index" :index="item.id + ''">
          <template>
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="child in item.children" :key="child.id" :index="child.index">
              {{ child.name }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
    
  <script setup lang="ts">
import { reactive, ref } from 'vue'
const menuList = reactive([
  {
    icon: '菜单1',
    id: '1',
    children: [
      {
        id: '',
        index: '',
        name: ''
      }
    ]
  },
  {
    name: '菜单2',
    id: '2',
    children: [
      {
        id: '',
        index: '',
        name: ''
      }
    ]
  },
  {
    name: '菜单3',
    id: '3',
    children: [
      {
        id: '',
        index: '',
        name: ''
      }
    ]
  }
])

const isCollapse = ref(false)
const title = ref('')
const defaultPath = ref('')
const handleOpen = () => {
  alert(1)
}
const handleClose = () => {
  alert(2)
}
</script>
    
  <style lang="scss" scoped>
</style>