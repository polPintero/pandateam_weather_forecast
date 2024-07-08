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
  display: flex;
  flex-direction: column;
  border-radius: 44px;
  background-image: url('../assets/bg_main.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  box-shadow: 0px 0px 20px 0px #0d1431;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100%;
    border-radius: 0;
  }
}
</style>
