<!--
 * @Author: wosls
 * @Date: 2023-09-20 16:50:44
 * @LastEditors: wosls
 * @LastEditTime: 2023-12-02 10:53:37
 * @FilePath: \myblog\src\views\Blog\ArticleDetails.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div id="article-details">
    <div class="container">
      <!-- 侧边栏 -->
      <div class="sticky-layout">
        <catalog-card v-if="1"></catalog-card>
      </div>

      <!-- 文章内容 -->
      <div class="post-body">
        <div class="article-content" v-html="articleDetails.content"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive,defineProps } from 'vue'
const articleDetails = reactive({
  createTime: '',
  content: ''
})
const props = defineProps({
  
})
// export default {
//   components: {
//     CatalogCard: CatalogCard
//   },
//   name: 'ArticleDetails',
//   setup(props) {
//     window.scrollTo({ top: 0 })

//     // 获取文章内容

//     let articleDetails = reactive({
//       createTime: '',
//       content: ''
//     })

//     return {
//       articleDetails
//     }
//   },
//   props: ['id']
// }
</script>

<style scoped>
</style>