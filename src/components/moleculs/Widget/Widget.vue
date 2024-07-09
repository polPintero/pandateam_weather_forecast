<template>
  <div class="widget">
    <div class="widget__city">{{ widget.name }}</div>
    <div class="widget__temp">{{ widget.main.temp.toFixed() }}</div>
    <div class="widget__description">{{ widget.weather[0].description }}</div>
    <div class="widget__extra">
      <div class="widget__humidity">H:{{ widget.main.humidity }}</div>
      <div class="widget__wind">W:{{ widget.wind.speed }}</div>
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
  },
  watch: {
    widget(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss" scoped>
.widget {
  width: max-content;
  padding: 16px;
  color: var(--txt-color-primary);
  text-align: center;

  &__city {
    font-size: 2.2rem;
  }

  &__temp {
    font-size: 6rem;
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
