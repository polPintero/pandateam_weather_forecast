<template>
  <component class="weather-icon" :is="currIcon" />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'WeatherIcon',
  props: {
    iconCode: {
      type: Number,
      default: 800
    }
  },
  components: {
    200: defineAsyncComponent(() => import('@/components/atoms/WeatherIcon/200.vue')),
    300: defineAsyncComponent(() => import('@/components/atoms/WeatherIcon/300.vue')),
    500: defineAsyncComponent(() => import('@/components/atoms/WeatherIcon/500.vue')),
    600: defineAsyncComponent(() => import('@/components/atoms/WeatherIcon/600.vue')),
    700: defineAsyncComponent(() => import('@/components/atoms/WeatherIcon/700.vue')),
    800: defineAsyncComponent(() => import('@/components/atoms/WeatherIcon/800.vue')),
    801: defineAsyncComponent(() => import('@/components/atoms/WeatherIcon/801.vue')),
    802: defineAsyncComponent(() => import('@/components/atoms/WeatherIcon/802.vue')),
    803: defineAsyncComponent(() => import('@/components/atoms/WeatherIcon/803.vue'))
  },
  computed: {
    currIcon() {
      const iconsList = {
        default: '800',
        200: '200',
        300: '300',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        801: '801',
        802: '802',
        803: '803',
        804: '803'
      };
      let icon = iconsList[this.iconCode];
      if (!icon) {
        icon = (this.iconCode / 100).toFixed() + '00';
      }
      return icon ? icon : iconsList.default;
    }
  },
  created() {
    console.log(this.iconCode);
  }
};
</script>

<style lang="scss" scoped>
.weather-icon {
  max-width: 100%;
  max-height: 100%;
}
</style>
