export default {
  methods: {
    getCurrentPosition() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.successGetPosition, this.errrorGetPosition);
      } else {
        console.log('is not location API');
      }
    },
    successGetPosition(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      this.$store.dispatch('getWeatherByCoords', { lat, lon });
    },
    errrorGetPosition(err) {
      console.log(err);
    }
  }
};
