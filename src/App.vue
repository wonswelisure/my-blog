<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'


onMounted(() => {

})
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/ArticleDetails">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />

</template>

<style>
:root {
    --theme-color: #19b1f5;
    --text-color: #4c4948;
    --card-box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);
}
</style>
