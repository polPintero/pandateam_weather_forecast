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
      <div v-if="activeTab === 'today'" class="block__hourly">
        <ForecastItem
          v-for="(item, index) in today"
          :key="item.id"
          :label="getHours(item.dt * 1000, index === 0)"
          :temp="item.main.temp.toFixed()"
          :humidity="item.main.humidity"
          :isActive="index === 0"
          :iconCode="item.weather[0].id"
        />
      </div>
      <div v-else class="block__weekly">
        <WeeklyForecast v-for="(item, index) in weeklyForecast" :key="index" :weekData="item" />
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
    ),
    WeeklyForecast: defineAsyncComponent(
      () => import('@/components/moleculs/CurrentBlock/WeeklyForecast.vue')
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
  watch: {
    weeklyForecast() {
      this.today = this.weeklyForecast[0];
    }
  },
  methods: {
    changeTab(tabName) {
      this.activeTab = tabName;
    },
    getHours(time, isNow) {
      if (isNow) return 'Now';
      const date = new Date(time);
      return date.getHours() + '-00';
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
  border: 1px solid #7582f4;
  border-radius: 44px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  overflow: hidden;
  background: linear-gradient(135deg, #2e335a, #1c1b33);
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;

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
    padding: 12px;
    border-top: 1px solid #7582f4;
  }

  &__hourly,
  &__weekly {
    display: flex;
    justify-content: space-around;
    gap: 32px;
    padding: 12px;
    overflow-x: auto;
  }
}
</style>
