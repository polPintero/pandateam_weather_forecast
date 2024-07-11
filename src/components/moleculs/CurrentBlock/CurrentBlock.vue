<template>
  <div class="block">
    <div class="block__header">
      <div
        class="block__header__item"
        :class="{ isActive: activeTab === 'today' }"
        @click="changeTab('today')"
      >
        {{ $t('forecast.hourly') }}
      </div>
      <div
        class="block__header__item"
        :class="{ isActive: activeTab !== 'today' }"
        @click="changeTab()"
      >
        {{ $t('forecast.weekly') }}
      </div>
      <div class="block__header__chartbtn" @click="toggleChart" />
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
    <ChartWeather v-show="isOpenChart" />
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
    ),
    ChartWeather: defineAsyncComponent(
      () => import('@/components/moleculs/ChartWeather/ChartWeather.vue')
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
  computed: {
    isOpenChart() {
      return this.$store.getters['isOpenChart'];
    }
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
    },
    toggleChart() {
      this.$store.commit('TOGGLE_CHART');
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
  height: 90%;
  border: 1px solid #7582f4;
  border-radius: 44px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  overflow: hidden;
  background: linear-gradient(135deg, #2e335a, #1c1b33);
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  transition-duration: 0.2s;

  &__header {
    --padding: 16px;

    display: flex;
    justify-content: space-between;
    position: relative;
    padding: var(--padding);

    &__chartbtn {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      width: 48px;
      height: 8px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.3);
      box-shadow: 0 0 5px rgba(72, 49, 157, 1);
      cursor: pointer;
    }

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
