<template>
  <FavoriteIcon class="add-fav" :class="{ isFavorite }" @click="addToFavorite" />
  <div v-if="isShowPopover" class="add-fav__cant-add">
    <span class="add-fav__cant-add--close" @click="hidePopover" />
    <div>{{ $t('favorite.popover.title') }}</div>
    <div>{{ $t('favorite.popover.msg') }}</div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'AddFavorite',
  components: {
    FavoriteIcon: defineAsyncComponent(() => import('@/components/atoms/icons/Favorite.vue'))
  },
  data() {
    return {
      isShowPopover: false
    };
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
        if (this.listFavorites.length >= 5) {
          this.isShowPopover = true;
          return;
        }
        this.$store.dispatch('addToFavorite', this.widget);
      }
    },
    hidePopover() {
      this.isShowPopover = false;
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

  &__cant-add {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--txt-color-primary);
    padding: 2rem;
    margin: auto;
    border: none;
    border-radius: 10px;
    background: rgba(72, 49, 157, 1);
    font-size: 1.5rem;
    line-height: 150%;
    text-align: center;

    &--close {
      width: 14px;
      height: 14px;
      top: 10px;
      right: 10px;
      position: absolute;
      &:before,
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: 100%;
        height: 3px;
        border-radius: 10px;
        background: var(--txt-color-primary);
        cursor: pointer;
      }

      &:after {
        transform: rotate(45deg);
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &:before {
        transform: rotate(135deg);
        transform: translate(-50%, -50%) rotate(135deg);
      }
    }
  }
}
</style>
