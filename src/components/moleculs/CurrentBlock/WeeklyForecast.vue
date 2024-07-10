<template>
  <ForecastItem
    :label="getLabel()"
    :temp="currData.main.temp.toFixed()"
    :humidity="currData.main.humidity"
    :isActive="checkNowDay()"
    :iconCode="currData.weather[0].id"
  />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'WeeklyForecast',
  components: {
    ForecastItem: defineAsyncComponent(
      () => import('@/components/moleculs/CurrentBlock/ForecastItem.vue')
    )
  },
  props: {
    weekData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    currData() {
      const index = Math.floor(this.weekData.length / 2);
      return this.weekData[index];
    }
  },
  methods: {
    getLabel() {
      return new Intl.DateTimeFormat('en', {
        weekday: 'short'
      }).format(new Date(this.currData.dt * 1000));
    },
    checkNowDay() {
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      const checkDate = new Date(this.currData.dt * 1000);
      checkDate.setHours(0, 0, 0, 0);
      return now.getTime() === checkDate.getTime();
    }
  }
};
</script>

<style></style>
