<template>
  <div class="add-btn__wrap">
    <div class="add-btn__container">
      <div class="add-btn"></div>
    </div>
  </div>

  <svg class="clip-path-only">
    <clipPath id="add-btn-path" clipPathUnits="objectBoundingBox">
      <path
        d="M0.434,0 H0.597 C0.721,0,0.758,0.241,0.797,0.487 C0.838,0.741,0.88,1,1,1 H0.016 C0.151,1,0.193,0.741,0.234,0.487 C0.273,0.241,0.31,0,0.434,0"
      ></path>
    </clipPath>
  </svg>
</template>

<script>
export default {
  name: 'AddBtn'
};
</script>

<style lang="scss" scoped>
.add-btn {
  width: 100%;
  height: 100%;
  min-width: 100%;
  border-radius: inherit;
  position: relative;
  cursor: pointer;
  background-image: linear-gradient(#f5f5f9, #dadfe7);
  filter: drop-shadow(-10px -10px 20px rgba(255, 255, 255, 0.5))
    drop-shadow(10px 10px 20px rgba(13, 20, 49, 0.5));
  box-shadow: 1px 1px 0.5px #ffffff;

  &__container {
    --size-btn: 64px;

    width: var(--size-btn);
    height: var(--size-btn);
    min-width: var(--size-btn);
    border-radius: 50%;
    padding: 3px;
    z-index: 1;

    background: #48319d linear-gradient(135deg, #000000 16%, rgba(255, 255, 255, 0.76));
  }

  &__wrap {
    --border-width: 1px;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    &:before,
    &:after {
      content: '';
      position: absolute;
      clip-path: url(#add-btn-path);
    }

    &:after {
      top: var(--border-width);
      left: var(--border-width);
      width: calc(100% - calc(var(--border-width) * 2));
      height: calc(100% - calc(var(--border-width) * 2));
      background: linear-gradient(#262c51, #3e3f74);
    }

    &:before {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #7582f4;
    }
  }

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
    background: var(--color-primary);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
}
</style>
