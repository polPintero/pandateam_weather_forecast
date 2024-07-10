<template>
  <div class="search" :class="{ isOpen: isOpenSearch }">Search</div>
</template>

<script>
export default {
  name: 'Search',
  computed: {
    isOpenSearch() {
      return this.$store.getters['isOpenSearch'];
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(100%);
  width: 100%;
  height: 100%;
  background-color: rgba(72, 49, 157, 1);
  background-image: linear-gradient(
    135deg,
    rgba(97, 47, 171, 0) 14%,
    rgba(97, 47, 171, 1) 36%,
    rgba(97, 47, 171, 0) 63%,
    rgba(97, 47, 171, 1)
  );
  z-index: 1;

  &.isOpen {
    transform: translateY(0%);
  }
}
</style>
