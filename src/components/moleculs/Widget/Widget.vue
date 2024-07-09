<template>
  <div class="widget">
    <div class="widget__city">{{ widget.name }}</div>
    <span class="widget__temp">{{ widget.main.temp.toFixed() }}</span>
    <div class="widget__description">{{ widget.weather[0].description }}</div>
    <div class="widget__extra">
      <div class="widget__humidity">H:{{ widget.main.humidity }}%</div>
      <div class="widget__wind">W:{{ widget.wind.speed }}m/s</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WidgetApp',
  props: {
    widget: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
.widget {
  width: max-content;
  margin-top: 32px;
  color: var(--txt-color-primary);
  text-align: center;

  &__city {
    font-size: 2rem;
  }

  &__temp {
    font-size: 4.5rem;
    position: relative;

    &:after {
      --size: 10px;

      content: '';
      top: 1rem;
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

  &__description {
    font-size: 1.25rem;
    color: var(--txt-color-secondary);
  }

  &__extra {
    display: flex;
    gap: 1rem;
    justify-content: center;
    font-size: 1.25rem;
  }
}
</style>
