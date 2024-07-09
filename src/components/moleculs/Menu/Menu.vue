<template>
  <nav class="nav">
    <ul class="menu">
      <li>geo</li>
      <li><AddBtn /></li>
      <li>search</li>
    </ul>
  </nav>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'MenuApp',
  components: {
    AddBtn: defineAsyncComponent(() => import('./AddBtn.vue'))
  }
};
</script>

<style lang="scss" scoped>
.nav {
  --border-width: 1px;

  position: relative;
  height: MAX(100px, 13%);
  width: 100%;
  margin-top: auto;
  border-radius: inherit;

  &:before,
  &:after {
    content: '';
    position: absolute;
    clip-path: polygon(
      -0.2% 0%,
      4.6% 6.1%,
      10% 11.3%,
      15.8% 15.6%,
      22% 19.5%,
      28% 22.9%,
      34.6% 26.8%,
      41.2% 29.4%,
      48.8% 30.3%,
      56.2% 29.4%,
      62.2% 27.3%,
      68.8% 23.8%,
      75.6% 19.9%,
      82.2% 15.2%,
      88.4% 10.4%,
      94.4% 5.2%,
      100% 0.4%,
      100.2% 100.9%,
      0% 100.4%
    );
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  &:after {
    top: var(--border-width);
    left: var(--border-width);
    width: calc(100% - calc(var(--border-width) * 2));
    height: calc(100% - calc(var(--border-width) * 2));
    background: linear-gradient(#3a3a6a, #25244c);
  }

  &:before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #7582f4;
  }
}

.menu {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}
</style>
