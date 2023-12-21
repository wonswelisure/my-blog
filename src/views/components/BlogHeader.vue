<template>
  <div class="header">
    <div class="left">
      <div class="logo" @click="toHome">wosls</div>
    </div>
    <div class="right">
      <el-button icon="Plus" type="success" text bg @click="add">发布</el-button>
      <div class="user" @click="toMain"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const add = () => {
  router.push({ path: '/blog/ArticleEdit', query: { type: 'book' } })

}
const toMain = () => {
  router.push({ path: '/MainPage', query: { type: 'tomain' } })

}
const toHome = () => {
  router.push({ path: '/blog/ArticleList', query: { type: 'tohome' } })

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
  z-index: 1;

  .left {
    .logo {
      font-size: 30px;
      font-weight: bold;
      padding: 0 0 0 25px;
      font-family: serif;
      color: hsl(221, 86%, 6%);
      line-height: 69px;
      cursor: pointer;
    }
  }

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