<template>
    <div class="footer">
        <el-divider>
            <el-icon><star-filled /></el-icon>
        </el-divider>
        <ul class="footer-ul">
            <li>联系我们</li>
            <li>工作时间：10:30-17:00</li>
            <li>鄂ICP备2023013882号</li>
            <li>访问总量：1</li>
            <li></li>
        </ul>

    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    height: 200px;
    padding: 0 16px 0 16px;
    background-color: #fff;
    border-left: 1px solid #DADCE0;

    .el-divider--horizontal {
        margin: 0;
    }
}

.footer-ul {
    padding: 0;
    margin-top: 10px;
    li {
        list-style: none;
    }
}
</style>