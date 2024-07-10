class API {
  constructor({ domain, apiKey, apiValue }) {
    this.domain = domain;
    this.apiKey = apiKey;
    this.apiValue = apiValue;
  }
  async sendRequest(url = this.domain, params = {}) {
    let response = [];
    try {
      response = await fetch(url, params);
      response = await response.json();
    } catch (err) {
      response = {
        results: []
      };
      console.log(err);
    }
    return response;
  }
}

export default API;
