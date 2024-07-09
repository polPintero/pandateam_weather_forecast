<template>
  <div class="element">
    <div class="element__label">{{ label }}</div>
    <div class="element__image">
      <div class="element__ico"></div>
      <div v-if="humidity !== undefined" class="element__humidity">{{ humidity }}%</div>
    </div>
    <span v-if="temp !== undefined" class="element__temp">{{ temp }}</span>
  </div>
</template>

<script>
export default {
  name: 'ForecastItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    temp: {
      type: Number,
      default: undefined
    },
    humidity: {
      type: Number,
      default: undefined
    }
  }
};
</script>

<style lang="scss" scoped>
.element {
  &__temp {
    position: relative;

    &:after {
      --size: 6px;

      content: '';
      top: 10%;
      right: -10px;
      display: block;
      position: absolute;
      width: var(--size);
      min-width: var(--size);
      height: var(--size);
      border: 2px solid #fff;
      border-radius: 50%;
    }
  }
}
</style>
