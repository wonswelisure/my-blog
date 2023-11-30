<template>
  <div class="not-found">
    <p class="status-code">404</p>
    <p class="return">返回首页</p>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.not-found {
  .status-code{
    font-size: 50px;
    color: $font-color-gray;
  }
  .return {
    color: #62A5E8;
    text-decoration: underline;
    text-align: center;
  }
}
</style>