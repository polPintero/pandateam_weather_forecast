import Api from './Api';

class ForecastApi extends Api {
  constructor(domain) {
    super(domain);
  }

  async getSearch() {}
}

export default new ForecastApi('https://api.openweathermap.org/data/2.5/ ');
