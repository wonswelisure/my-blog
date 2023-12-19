<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => { })
</script>

<template>
    <!-- 回到顶部 -->
    <el-backtop :bottom="50">
        <div style="
        height: 100%;
        width: 100%;
        font-size: 13px;
        border-radius: 30px;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 30px;
        color: #1989fa;
      ">
            <el-icon>
                <Top />
            </el-icon>
        </div>
    </el-backtop>
</template>

<style></style>
