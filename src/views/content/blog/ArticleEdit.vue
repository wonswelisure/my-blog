<!--
 * @Author: wosls
 * @Date: 2023-12-19 15:33:52
 * @LastEditors: wosls
 * @LastEditTime: 2023-12-21 15:53:58
 * @FilePath: \myblog\src\views\content\blog\ArticleEdit.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <div class="editor">
        <blog-header></blog-header>
        <div class="mavonEditor">
            <mavon-editor :toolbars="markdownOption" v-model="handbook"></mavon-editor>
        </div>

    </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, } from 'vue'
import BlogHeader from '../../components/BlogHeader.vue'
const markdownOption = reactive({
    bold: true, // 粗体
    italic: true, // 斜体
    header: true, // 标题
    underline: true, // 下划线
    strikethrough: true, // 中划线
    mark: true, // 标记
    superscript: true, // 上角标
    subscript: true, // 下角标
    quote: true, // 引用
    ol: true, // 有序列表
    ul: true, // 无序列表
    link: true, // 链接
    imagelink: true, // 图片链接
    code: true, // code
    table: true, // 表格
    fullscreen: true, // 全屏编辑
    readmodel: true, // 沉浸式阅读
    htmlcode: true, // 展示html源码
    help: true, // 帮助
    /* 1.3.5 */
    undo: true, // 上一步
    redo: true, // 下一步
    trash: true, // 清空
    save: true, // 保存（触发events中的save事件）
    /* 1.4.2 */
    navigation: true, // 导航目录
    /* 2.1.8 */
    alignleft: true, // 左对齐
    aligncenter: true, // 居中
    alignright: true, // 右对齐
    /* 2.2.1 */
    subfield: true, // 单双栏模式
    preview: true, // 预览
})
let handbook = ref("")
// window.addEventListener('keydown',e => {
//     if(e.key==='s'){
//         alert('保存')
//     }
// })

onMounted(() => { })
</script>
<style lang="scss" scoped>
.editor {
    width: 100%;
    height: 100vh;
    background-color: #FFF
}

.mavonEditor {
    width: 100%;
    height: calc(100% - 70px);

    ::v-deep(.markdown-body) {
        height: 100% !important;
        box-shadow: none !important;
    }

}
</style>
