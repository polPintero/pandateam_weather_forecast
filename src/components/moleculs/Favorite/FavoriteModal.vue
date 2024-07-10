<template>
  <div class="favorite-modal" :class="{ isOpen: isOpenFavoriteModal }">
    <div class="favorite-modal__close" @click="closeFavoriteModal" />
    <template v-if="listFavorites && listFavorites.length > 0">
      <WidgetWeather v-for="item in listFavorites" :key="item.id" :widget="item" />
    </template>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'FavoriteModal',
  components: {
    WidgetWeather: defineAsyncComponent(() => import('@/components/moleculs/Widget/Widget.vue'))
  },
  computed: {
    isOpenFavoriteModal() {
      return this.$store.getters['isOpenFavoriteModal'];
    },
    listFavorites() {
      return this.$store.getters['listFavorites'];
    }
  },
  methods: {
    closeFavoriteModal() {
      this.$store.commit('TOGGLE_FAVORITE_MODAL', false);
    }
  },
  mounted() {
    console.log(this.listFavorites);
  }
};
</script>

<style lang="scss" scoped>
.favorite-modal {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(100%);
  width: 100%;
  height: 100%;
  padding: 32px;
  background-color: rgba(72, 49, 157, 1);
  background-image: linear-gradient(
    135deg,
    rgba(97, 47, 171, 0) 14%,
    rgba(97, 47, 171, 1) 36%,
    rgba(97, 47, 171, 0) 63%,
    rgba(97, 47, 171, 1)
  );
  transition-duration: 0.2s;
  z-index: 1;

  &.isOpen {
    transform: translateY(0%);
  }

  &__close {
    position: relative;
    width: 10px;
    height: 10px;
    margin-left: auto;
    cursor: pointer;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: MAX(20px, 40%);
      height: 3px;
      border-radius: 10px;
      background: var(--txt-color-primary);
    }

    &:after {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:before {
      transform: translate(-50%, -50%) rotate(135deg);
    }

    @media (max-width: 768px) {
      margin: 0;
      right: -100%;
    }
  }
}
</style>
