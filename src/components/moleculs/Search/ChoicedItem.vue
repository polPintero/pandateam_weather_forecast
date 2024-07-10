<template>
  <div class="choiced">
    <WidgetWeather :widget="widget" />
    <div class="choiced__add-btn" title="Add to main" @click="addToMain" />
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

  &__add-btn {
    position: absolute;
    width: 10px;
    height: 10px;
    right: -10px;
    top: 0;
    cursor: pointer;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: MAX(20px, 40%);
      height: 4px;
      border-radius: 10px;
      background: var(--txt-color-primary);
    }

    &:after {
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }
}
</style>
