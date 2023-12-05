<!--
 * @Author: wosls
 * @Date: 2023-11-30 17:42:39
 * @LastEditors: wosls
 * @LastEditTime: 2023-12-05 10:59:47
 * @FilePath: \myblog\src\layout\component\Sidebar\index.vue
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
        <el-sub-menu v-for="(item, index) in menuList" :key="index" :index="item.id + ''">
          <template #title>
            <!-- render element plus icon from data -->
            <el-icon> <component :is="item.icon" /></el-icon>
            <span>{{ item.name }}</span>
          </template>

          <el-menu-item-group>
            <el-menu-item v-for="child in item.children" :key="child.id" :index="child.index">
              {{ child.name }}
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
    
  <script setup lang="ts">
import { reactive, ref } from 'vue'
const menuList = reactive([
  {
    name: '菜单1',
    id: '1',
    icon: 'StarFilled',
    children: [
      {
        id: '1',
        index: '',
        name: '主页'
      }
    ]
  },
  {
    name: '菜单2',
    id: '2',
    icon: 'Share',

    children: [
      {
        id: '1',
        index: '',
        name: '详情'
      }
    ]
  },
  {
    name: '菜单3',
    id: '3',
    icon: 'UploadFilled',
    children: [
      {
        id: '1',
        index: '',
        name: '测试'
      }
    ]
  },
  {
    name: '菜单3',
    id: '3',
    icon: 'UploadFilled',
    children: [
      {
        id: '1',
        index: '',
        name: '测试'
      }
    ]
  },
  {
    name: '菜单3',
    id: '3',
    icon: 'UploadFilled',
    children: [
      {
        id: '1',
        index: '',
        name: '测试'
      }
    ]
  },
  {
    name: '菜单3',
    id: '3',
    icon: 'UploadFilled',
    children: [
      {
        id: '1',
        index: '',
        name: '测试'
      }
    ]
  },
  {
    name: '菜单3',
    id: '3',
    icon: 'UploadFilled',
    children: [
      {
        id: '1',
        index: '',
        name: '测试'
      }
    ]
  },
  {
    name: '菜单3',
    id: '3',
    icon: 'UploadFilled',
    children: [
      {
        id: '1',
        index: '',
        name: '测试'
      }
    ]
  },
  {
    name: '菜单3',
    id: '3',
    icon: 'UploadFilled',
    children: [
      {
        id: '1',
        index: '',
        name: '测试'
      }
    ]
  },
  {
    name: '菜单3',
    id: '3',
    icon: 'UploadFilled',
    children: [
      {
        id: '1',
        index: '',
        name: '测试'
      }
    ]
  },
  {
    name: '菜单3',
    id: '3',
    icon: 'UploadFilled',
    children: [
      {
        id: '1',
        index: '',
        name: '测试'
      }
    ]
  },
  {
    name: '菜单3',
    id: '3',
    icon: 'UploadFilled',
    children: [
      {
        id: '1',
        index: '',
        name: '测试'
      }
    ]
  },
  {
    name: '菜单5',
    id: '3',
    icon: 'UploadFilled',
    children: [
      {
        id: '1',
        index: '',
        name: '测试'
      }
    ]
  }
])

const isCollapse = ref(false)
const title = ref('wosls')
const defaultPath = ref('')
const handleOpen = () => {
  alert(1)
}
const handleClose = () => {
  alert(2)
}
</script>
    
  <style lang="scss" scoped>
.logo {
  height: 100px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  border-bottom: 1px solid #ccc;
  flex-wrap: wrap;
  align-items: center;
}
</style>