<template>
  <div class="header">
    <div class="left"></div>
    <div class="right">
      <el-icon :size="20" color="#DADCE0">
        <DocumentAdd />
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
  // background-color: #fff;
  border-bottom: 1px solid #DADCE0;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-image: radial-gradient(transparent 1px, #FFF 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);

  .left {}

  .right {
    padding: 0 20px 0 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .user {
      width: 50px;
      height: 50px;
      margin-left: 20px;
      border-radius: 50px;
      background-image: url('@/assets/image/wosls.jpg');
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}
</style>