<template>
  <div class="menu">menu</div>

  <svg width="0" height="0" :style="{ transform: `rotate(180deg)` }">
    <defs>
      <clipPath id="clip" clipPathUnits="objectBoundingBox">
        <path
          d="
            M  0,1
			 L 0,0
			 L 1,0
			 L 1,1
			 C .45 .4, .35 .8, 
             0 1 Z
             "
        />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {
  name: 'MenuApp'
};
</script>

<style lang="scss" scoped>
.menu {
  height: 100px;
  width: 100%;
  margin-top: auto;
  background: linear-gradient(#3a3a6a, #25244c);
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
}
</style>
