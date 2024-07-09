<template>
  <main class="main">
    <WidgetApp v-if="widget" :widget="widget" />
    <CurrentBlock v-if="currentBlock" />
    <MenuApp />
  </main>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import locationMixin from '@/mixins/location';

export default {
  name: 'HomeView',
  mixins: [locationMixin],
  components: {
    MenuApp: defineAsyncComponent(() => import('@/components/moleculs/Menu/Menu.vue')),
    WidgetApp: defineAsyncComponent(() => import('@/components/moleculs/Widget/Widget.vue')),
    CurrentBlock: defineAsyncComponent(
      () => import('@/components/moleculs/CurrentBlock/CurrentBlock.vue')
    )
  },
  computed: {
    widget() {
      return this.$store.getters['widget'];
    },
    currentBlock() {
      return this.$store.getters['currentBlock'];
    }
  },
  beforeMount() {
    // this.getCurrentPosition();
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  max-width: 768px;
  height: 90%;
  position: relative;
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

  &:deep() {
    .block {
      position: absolute;
      bottom: 0;
      transform: translateY(10%);
    }
  }
}
</style>
