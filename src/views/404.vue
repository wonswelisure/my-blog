<!--
 * @Author: wangbing wangbing
 * @Date: 2023-11-29 11:48:51
 * @LastEditors: wangbing wangbing
 * @LastEditTime: 2023-11-30 17:55:04
 * @FilePath: \myblog\src\views\404.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="not-found">
    <p class="status-code">404</p>
    <p class="return">返回首页</p>
    <el-row>
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
.not-found {
  .status-code {
    font-size: 50px;
    color: $font-color-gray;
  }
  .return {
    color: #62a5e8;
    text-decoration: underline;
    text-align: center;
  }
}
</style>