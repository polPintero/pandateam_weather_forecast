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
  //   clip-path: ellipse(115px 55px at 50% 40%);
  //   clip-path: path(
  //     'M0 1C0 1 76.0769 16.9822 127 21C153.339 23.0782 168.554 24 195 24C221.446 24 235.661 23.0782 262 21C312.923 16.9822 390 1 390 1V89H0V1Z'
  //   );
  clip-path: url(#clip);
}
</style>
