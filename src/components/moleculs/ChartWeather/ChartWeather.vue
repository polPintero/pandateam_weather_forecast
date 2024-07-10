<template>
  <canvas ref="canvas" />
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'ChartWeather',
  data() {
    return {
      chart: null,
      chartData: {
        labels: ['jan', 'sdf', 'sdf', 'qwe', 'wer', '43w4', 'werwerw'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#7582f4',
            tension: 0.1
          }
        ]
      }
    };
  },
  methods: {
    initialChat() {
      const ctx = this.$refs.canvas.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'line',
        data: this.chartData
      });
    }
  },
  mounted() {
    this.initialChat();
  }
};
</script>

<style></style>
