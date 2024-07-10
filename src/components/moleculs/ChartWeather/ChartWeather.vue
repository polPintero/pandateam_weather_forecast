<template>
  <div class="chart">
    <canvas ref="canvas" />
  </div>
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
            label: 'Temperature on Week',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            borderColor: '#7582f4',
            backgroundColor: 'rgba(117, 130, 244, 0.2)',
            tension: 0.1
          }
        ]
      },
      axesOptions: {
        ticks: {
          color: '#ffffff',
          font: {
            size: 18
          }
        },
        grid: {
          color: 'rgba(235, 235, 245, 0.2)'
        }
      }
    };
  },
  methods: {
    initialChat() {
      const ctx = this.$refs.canvas.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'line',
        data: this.chartData,
        options: {
          scales: {
            y: this.axesOptions,
            x: this.axesOptions
          },
          plugins: {
            legend: {
              labels: {
                color: '#7582f4'
              }
            }
          }
        }
      });
    }
  },
  mounted() {
    this.initialChat();
  }
};
</script>

<style lang="scss" scoped>
.chart {
  padding: 2rem;
}
</style>
