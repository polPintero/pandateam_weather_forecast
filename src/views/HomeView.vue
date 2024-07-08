<template>
  <main class="main"></main>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  max-width: 768px;
  height: 90%;
  border: 1px solid;
  border-radius: 44px;
  background-image: url('../assets/bg_main.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

  @media (max-width: 768px) {
    height: 100%;
    border-radius: 0;
  }
}
</style>
