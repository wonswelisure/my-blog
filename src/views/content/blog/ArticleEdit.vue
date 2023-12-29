<!--
 * @Author: wosls
 * @Date: 2023-12-19 15:33:52
 * @LastEditors: wosls
 * @LastEditTime: 2023-12-27 18:37:34
 * @FilePath: \myblog\src\views\content\blog\ArticleEdit.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <div class="editor">
        <blog-header></blog-header>
        <div class="mavonEditor">
            <mavon-editor :toolbars="markdownOption" v-model="handbook">
                <!-- 引用模板的自定义按钮 -->
                <template v-slot:right-toolbar-before>
                    <!--点击按钮触发的事件是打开模板选择对话框-->
                    <el-button type="text" @click="dialogVisible = true" aria-hidden="true" class="op-icon fa" title="使用模板">
                        <el-icon :size="16" color="#757575">
                            <DocumentCopy />
                            
                        </el-icon>
                    </el-button>
                </template>
            </mavon-editor>
        </div>
        <el-dialog v-model="dialogVisible" title="Tips" width="50%" :before-close="handleClose">
            <span>这是一些模板</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">
                        确定
                    </el-button>
                </span>
            </template>
        </el-dialog>
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

const dialogVisible = ref(false)

// window.addEventListener('keydown',e => {
//     if(e.key==='s'){
//         alert('保存')
//     }
// })
const handleClose = () => {

}
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
    position:absolute;
    top:70px;
    ::v-deep(.markdown-body) {
        height: 100% !important;
        box-shadow: none !important;
    }

}
</style>
