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
    listFavorites() {
      return this.$store.getters['listFavorites'];
    },
    isFavorite() {
      return this.listFavorites.some((i) => i.id === this.widget.id);
    }
  },
  methods: {
    addToFavorite() {
      if (this.isFavorite) {
        this.$store.dispatch('removeFromFavorite', this.widget);
      } else {
        this.$store.dispatch('addToFavorite', this.widget);
      }
    }
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
