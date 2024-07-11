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
      labels: [],
      dataset: [],
      axesOptions: {
        ticks: {
          color: '#ffffff',
          font: {
            size: 12
          }
        },
        grid: {
          color: 'rgba(235, 235, 245, 0.2)'
        }
      },
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
  },
  computed: {
    weeklyForecast() {
      return this.$store.getters['weeklyForecast'];
    }
  },
  watch: {
    weeklyForecast() {
      this.chart.destroy();
      this.initialChart();
      this.chart.update();
    }
  },
  methods: {
    initialChart() {
      this.initData();
      const chartData = {
        labels: this.labels,
        datasets: [
          {
            label: 'Temperature',
            data: this.dataset,
            fill: true,
            borderColor: '#7582f4',
            backgroundColor: 'rgba(117, 130, 244, 0.2)',
            tension: 0.1
          }
        ]
      };
      const ctx = this.$refs.canvas.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
          scales: {
            y: this.axesOptions,
            x: { display: false }
          },
          plugins: {
            legend: {
              labels: {
                color: '#7582f4',
                boxWidth: 0,
                boxHeight: 0,
                font: {
                  size: 18
                }
              }
            }
          }
        }
      });
    },

    getLabel(time) {
      return new Intl.DateTimeFormat('uk', {
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: this.timeZone
      }).format(new Date(time));
    },
    initData() {
      this.labels = [];
      this.dataset = [];
      this.weeklyForecast.list.forEach((item) => {
        this.dataset.push(item.main.temp);
        this.labels.push(this.getLabel(item.dt * 1000));
      });
    }
  },
  mounted() {
    if (this.weeklyForecast) this.initialChart();
  }
};
</script>

<style lang="scss" scoped>
.chart {
  padding: 2rem;
}
</style>
