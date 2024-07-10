<template>
  <FavoriteIcon class="add-fav" :class="{ isFavorite }" @click="addToFavorite" />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'AddFavorite',
  components: {
    FavoriteIcon: defineAsyncComponent(() => import('@/components/atoms/icons/Favorite.vue'))
  },
  computed: {
    widget() {
      return this.$store.getters['widget'];
    },
    isFavorite() {
      return true;
    }
  },
  methods: {
    addToFavorite() {}
  }
};
</script>

<style lang="scss" scoped>
.add-fav {
  cursor: pointer;

  &.isFavorite {
    color: #c427fb;
  }
}
</style>
