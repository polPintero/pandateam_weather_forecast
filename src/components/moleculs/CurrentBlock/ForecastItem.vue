<template>
  <div class="element" :class="{ isActive }">
    <div class="element__label">{{ label }}</div>
    <div class="element__image">
      <div class="element__ico">
        <WeatherIcon :iconCode="iconCode" />
      </div>
      <div v-if="humidity !== undefined" class="element__humidity">{{ humidity }}%</div>
    </div>
    <span v-if="temp !== undefined" class="element__temp">{{ temp }}</span>
  </div>
</template>

<script>
import WeatherIcon from '@/components/atoms/WeatherIcon/WeatherIcon.vue';
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
    },
    iconCode: {
      type: Number,
      default: 800
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  components: {
    WeatherIcon
  }
};
</script>

<style lang="scss" scoped>
.element {
  width: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border: 1px solid #7582f4;
  border-radius: 30px;
  font-weight: 700;
  background-color: rgba(72, 49, 157, 0.2);

  &.isActive {
    background-color: rgba(72, 49, 157, 1);
  }

  &__label {
    font-size: 1.1rem;
    white-space: nowrap;
    text-transform: capitalize;
  }

  &__ico {
    --size: 32px;
    width: var(--size);
    height: var(--size);

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__humidity {
    color: rgba(64, 203, 216, 1);
  }

  &__temp {
    position: relative;
    font-size: 1.3rem;

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
