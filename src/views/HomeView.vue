<template>
  <main class="main">
    <WidgetApp v-if="widget" :widget="widget" />
    <MenuApp />
  </main>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'HomeView',
  components: {
    MenuApp: defineAsyncComponent(() => import('@/components/moleculs/Menu/Menu.vue')),
    WidgetApp: defineAsyncComponent(() => import('@/components/moleculs/Widget/Widget.vue'))
  },
  computed: {
    widget() {
      return this.$store.getters['widget'];
    }
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
  align-items: center;
  border-radius: 44px;
  background-image: url('../assets/bg_house.png'), url('../assets/bg_main.png');
  background-repeat: no-repeat;
  background-size: auto, cover;
  background-position: center, bottom;
  box-shadow: 0px 0px 20px 0px #0d1431;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100%;
    border-radius: 0;
  }
}
</style>
