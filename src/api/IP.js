// https://hutils.loxal.net/whois

import Api from './Api';

class ForecastApi extends Api {
  constructor(superObj) {
    super(superObj);
  }

  async getCoordsByIP() {
    const result = await this.sendRequest();
    return {
      lat: result.latitude,
      lon: result.longitude
    };
  }
}

export default new ForecastApi({
  domain: 'https://hutils.loxal.net/whois'
});
