<template>
  <div class="header">
    <div class="left"></div>
    <div class="right">
      <el-icon :size="30">
        <CirclePlus />
      </el-icon>
      <div class="user"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogHeader'
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 70px;
  background-color: pink;
  display: flex;
  justify-content: space-between;

  .left {}

  .right {
    padding: 0 20px 0 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .user {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      background-color: aquamarine;
    }
  }
}
</style>