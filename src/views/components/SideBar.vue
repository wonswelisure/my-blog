<template>
    <!-- 侧边栏 -->
    <div id="side-bar">
        <slot>
            <category-card />
        </slot>
    </div>
</template>

<script>
export default {
    name: "SideBar"
}
</script>

<style lang="scss" scoped>
#side-bar {
    width: 20%;
    margin-right: 0px;
}

@media screen and (max-width: 900px) {
    #side-bar {
        display: none;
    }
}
</style>