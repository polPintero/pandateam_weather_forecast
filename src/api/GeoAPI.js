import Api from './Api';

class GeoAPI extends Api {
  constructor(superObj) {
    super(superObj);
  }

  async searchCityByName(sityName) {
    let path = this.domain + 'direct';
    path += this.createQuery({ q: sityName, limit: 20 });
    return await this.sendRequest(path);
  }

  createQuery(params = {}) {
    if (this.apiKey) params.appid = this.apiKey;
    return '?' + new URLSearchParams(params).toString();
  }
}

export default new GeoAPI({
  domain: 'https://api.openweathermap.org/geo/1.0/',
  apiKey: '44cd3cc571bc6737f45d35a165cbab54'
});
