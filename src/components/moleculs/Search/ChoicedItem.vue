<template>
  <div class="choiced">
    <WidgetWeather :widget="widget" @click="addToMain" />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'ChoicedItem',
  components: {
    WidgetWeather: defineAsyncComponent(() => import('@/components/moleculs/Widget/Widget.vue'))
  },
  emits: ['addedToMain'],
  props: {
    widget: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    async addToMain() {
      this.$store.commit('SET_WIDGET', this.widget);
      await this.$store.dispatch('getForecastById', this.widget.id);
      this.$emit('addedToMain');
    }
  }
};
</script>

<style lang="scss" scoped>
.choiced {
  position: relative;

  &:deep() {
    .widget {
      border-radius: 10px;
      padding: 10px;
      &:hover {
        background-image: linear-gradient(100deg, #2e335a, #1c1b33);
      }
    }
  }
}
</style>
