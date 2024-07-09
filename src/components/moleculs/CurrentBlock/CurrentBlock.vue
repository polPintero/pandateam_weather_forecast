<template>
  <div class="block">
    <div class="block__header">
      <div
        class="block__header__item"
        :class="{ isActive: activeTab === 'today' }"
        @click="changeTab('today')"
      >
        Hourly Forecast
      </div>
      <div
        class="block__header__item"
        :class="{ isActive: activeTab !== 'today' }"
        @click="changeTab()"
      >
        Weekly Forecast
      </div>
    </div>
    <div class="block__content">
      <div class="block__hourly">
        <ForecastItem
          v-for="item in today"
          :key="item.dt"
          :temp="item.main.temp.toFixed()"
          :humidity="item.main.humidity"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'CurrentBlock',
  components: {
    ForecastItem: defineAsyncComponent(
      () => import('@/components/moleculs/CurrentBlock/ForecastItem.vue')
    )
  },
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
  },
  methods: {
    changeTab(tabName) {
      this.activeTab = tabName;
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
  display: flex;
  flex-direction: column;

  &__header {
    --padding: 16px;

    display: flex;
    justify-content: space-between;
    padding: var(--padding);

    &__item {
      flex-grow: 1;
      text-align: center;
      color: var(--txt-color-secondary);
      cursor: pointer;

      &.isActive {
        position: relative;
        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: calc(0px - var(--padding));
          width: 100%;
          height: 4px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 18%,
            #ffffff 50%,
            rgba(255, 255, 255, 0) 82%
          );
        }
      }
    }
  }

  &__content {
    flex-grow: 1;
    padding: 16px;
    border-top: 1px solid #7582f4;
  }
}
</style>
