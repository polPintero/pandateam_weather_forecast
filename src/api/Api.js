class API {
  constructor(domain) {
    this.domain = domain;
  }
  async sendRequest(url = '/', params = {}) {
    let response = await fetch(url, params);
    try {
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
