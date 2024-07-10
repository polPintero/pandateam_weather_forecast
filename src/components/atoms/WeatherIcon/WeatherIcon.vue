<template>
  <component class="weather-icon" :is="currIcon" />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'WeatherIcon',
  props: {
    iconCode: {
      type: String,
      default: 'sun'
    }
  },
  components: {
    Sun: defineAsyncComponent(() => import('@/components/atoms/WeatherIcon/Sun.vue'))
  },
  computed: {
    currIcon() {
      const iconsList = {
        sun: 'Sun'
      };
      return iconsList[this.iconCode];
    }
  }
};
</script>

<style lang="scss" scoped>
.weather-icon {
  max-width: 100%;
  max-height: 100%;
}
</style>
