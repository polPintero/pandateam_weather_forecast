<template>
  <div class="block">
    <div class="block__header">
      <div class="block__header__item" :class="{ isActive: activeTab === 'today' }">
        Hourly Forecast
      </div>
      <div class="block__header__item" :class="{ isActive: activeTab !== 'today' }">
        Weekly Forecast
      </div>
    </div>
    <div class="block__content"></div>
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
  },
  data() {
    return {
      today: this.weeklyForecast[0],
      activeTab: 'today'
    };
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
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 16px;

    &__item {
      flex-grow: 1;
      text-align: center;
      color: var(--txt-color-secondary);
      cursor: pointer;
    }
  }

  &__content {
    flex-grow: 1;
    padding: 16px;
    border-top: 1px solid #7582f4;
  }
}
</style>
