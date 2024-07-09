<template>
  <div class="widget">widget</div>
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

<style></style>
