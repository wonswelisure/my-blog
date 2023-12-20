<!--
 * @Author: wosls
 * @Date: 2023-09-20 16:50:44
 * @LastEditors: wosls
 * @LastEditTime: 2023-12-20 16:31:11
 * @FilePath: \myblog\src\views\content\blog\ArticleList.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <div id="article-details">
        <blog-header></blog-header>
        <div class="list-container">

        </div>

    </div>
</template>
  
<script lang="ts" setup>
import { onMounted } from 'vue'
import BlogHeader from '../../components/BlogHeader.vue'
onMounted(() => {})
</script>

<style scoped>
#article-details {
    display: flex;
    /* align-items: center; */
    flex-wrap: wrap;
    justify-content: center;
}

.list-container {
    width: 70%;
    height: 900px;
    margin: 10px 0 10px 0;
    background-color: blueviolet;
}
</style>