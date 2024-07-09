<template>
  <div class="block">
    <div class="block__header">
      <div class="block__header__item">Hourly Forecast</div>
      <div class="block__header__item">Weekly Forecast</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentBlock',
  props: {
    weeklyForecast: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
  height: 400px;
  border: 1px solid #7582f4;
  border-radius: 44px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  overflow: hidden;
  background: linear-gradient(135deg, #2e335a, #1c1b33);

  &__header {
    display: flex;
    justify-content: space-between;

    &__item {
      flex-grow: 1;
      text-align: center;
    }
  }
}
</style>
