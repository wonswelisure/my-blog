<!--
 * @Author: wosls
 * @Date: 2023-08-04 11:37:04
 * @LastEditors: wosls
 * @LastEditTime: 2023-12-19 15:13:44
 * @FilePath: \myblog\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'


onMounted(() => { })
</script>
<template>
  <RouterView />
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
