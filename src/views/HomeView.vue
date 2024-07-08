<template>
  <main class="main">
    <MenuApp />
  </main>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  name: 'HomeView',
  components: {
    MenuApp: defineAsyncComponent(() => import('../components/moleculs/Menu/Menu.vue'))
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  max-width: 768px;
  height: 90%;
  border: 1px solid;
  border-radius: 44px;
  background-image: url('../assets/bg_main.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

  @media (max-width: 768px) {
    height: 100%;
    border-radius: 0;
  }
}
</style>
