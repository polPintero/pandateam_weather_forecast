import Api from './Api';

class ForecastApi extends Api {
  constructor(superObj, lang = 'en', metric = 'metric') {
    super(superObj);
    this.lang = lang;
    this.metric = metric;
  }

  async getWeatherByCoords({ lat, lon }) {
    let path = this.domain + 'weather';
    path += this.createQuery({ lat, lon });
    return await this.sendRequest(path);
  }

  async getForecastByCoords({ lat, lon }) {
    let path = this.domain + 'forecast';
    path += this.createQuery({ lat, lon });
    return await this.sendRequest(path);
  }

  createQuery(params = {}) {
    params.units = this.metric;
    if (this.apiKey) params.appid = this.apiKey;
    if (this.lang) params.lang = this.lang;
    return '?' + new URLSearchParams(params).toString();
  }
}

export default new ForecastApi({
  domain: 'https://api.openweathermap.org/data/2.5/',
  apiKey: '44cd3cc571bc6737f45d35a165cbab54'
});
