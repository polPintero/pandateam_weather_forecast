<template>
  <nav class="nav">
    <ul class="nav__menu">
      <li class="nav__menu__item"><LocationBtn /></li>
      <li class="nav__menu__item"><AddBtn /></li>
      <li class="nav__menu__item">
        <FavoriteIcon width="40px" height="40px" @click="openFavoriteModal" />
      </li>
    </ul>
  </nav>

  <svg class="clip-path-only">
    <clipPath id="menu-path" clipPathUnits="objectBoundingBox">
      <path
        d="M0,0.011 C0,0.011,0.195,0.193,0.326,0.239 C0.393,0.262,0.432,0.273,0.5,0.273 C0.568,0.273,0.604,0.262,0.672,0.239 C0.802,0.193,1,0.011,1,0.011 V1 H0 V0.011"
      ></path>
    </clipPath>
  </svg>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'MenuApp',
  components: {
    AddBtn: defineAsyncComponent(() => import('@/components/moleculs/Menu/AddBtn.vue')),
    LocationBtn: defineAsyncComponent(() => import('@/components/moleculs/Menu/LocationBtn.vue')),
    FavoriteIcon: defineAsyncComponent(() => import('@/components/atoms/icons/Favorite.vue'))
  },
  methods: {
    openFavoriteModal() {
      this.$store.commit('TOGGLE_FAVORITE_MODAL', true);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  --border-width: 1px;

  position: relative;
  height: MAX(100px, 13%);
  width: 100%;
  margin-top: auto;
  border-radius: inherit;
  transition-duration: 0.2s;

  &:before,
  &:after {
    content: '';
    position: absolute;
    clip-path: url(#menu-path);

    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  &:after {
    top: var(--border-width);
    left: var(--border-width);
    width: calc(100% - calc(var(--border-width) * 2));
    height: calc(100% - calc(var(--border-width) * 2));
    background: linear-gradient(#3a3a6a, #25244c);
  }

  &:before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #7582f4;
  }

  &__menu {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;

    &__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      svg {
        cursor: pointer;

        &:hover {
          scale: 1.05;
        }
      }
    }
  }
}
</style>
