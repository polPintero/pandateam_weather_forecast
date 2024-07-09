<template>
  <LocationIcon @click="getCurrentPosition" />
</template>

<script>
import { defineAsyncComponent } from 'vue';

import locationMixin from '@/mixins/location';

export default {
  name: 'LocationBtn',
  mixins: [locationMixin],
  components: {
    LocationIcon: defineAsyncComponent(() => import('@/components/atoms/icons/Location.vue'))
  }
};
</script>

<style></style>
