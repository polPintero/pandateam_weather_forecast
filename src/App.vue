<template>
  <RouterView />
</template>
<script>
export default {
  name: 'App',
  methods: {
    getCoordsByIP() {
      this.$store.dispatch('getCoordsByIP');
    }
  },
  created() {
    this.getCoordsByIP();
  }
};
</script>
