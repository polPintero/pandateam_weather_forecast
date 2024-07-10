<template>
  <main class="main" :class="{ isOpenChart }">
    <WidgetApp v-if="widget" :widget="widget" />
    <CurrentBlock v-if="weeklyBlock" :weeklyForecast="weeklyBlock" />
    <MenuApp />
    <Search />
    <FavoriteModal />
    <AddFavorite v-if="widget" class="main__icon" width="20px" height="20px" />
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
    ),
    Search: defineAsyncComponent(() => import('@/components/moleculs/Search/Search.vue')),
    AddFavorite: defineAsyncComponent(
      () => import('@/components/moleculs/Favorite/AddFavorite.vue')
    ),
    FavoriteModal: defineAsyncComponent(
      () => import('@/components/moleculs/Favorite/FavoriteModal.vue')
    )
  },
  computed: {
    widget() {
      return this.$store.getters['widget'];
    },
    isOpenChart() {
      return this.$store.getters['isOpenChart'];
    },
    weeklyBlock() {
      return this.$store.getters['weeklyBlock'];
    }
  },
  beforeMount() {
    this.getCurrentPosition();
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
  background-position:
    center 56%,
    bottom;
  box-shadow: 0px 0px 20px 0px #0d1431;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100%;
    border-radius: 0;
  }

  &:deep() {
    .block {
      position: absolute;
      bottom: calc(379px - 90%);
    }

    .add-fav {
      width: 20px;
      height: 20px;
      position: absolute;
      right: 0;
      transform: translate(-100%, 100%);
    }
  }

  &.isOpenChart {
    color: red;

    &:deep() {
      .nav {
        transform: translateY(100%);
      }
      .block {
        bottom: 0;
      }
    }
  }
}
</style>
