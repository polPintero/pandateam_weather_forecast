class LocalStorageApi {
  #value = [];
  constructor(key) {
    this.key = key;
    this.#value = this.getFromStorage();
  }

  setToStorage(id) {
    this.#value.push(id);
    this.setToLocalStorage();
  }

  removeFromStorage(id) {
    this.#value = this.#value.filter((i) => i !== id);
    this.setToLocalStorage();
  }

  setToLocalStorage() {
    localStorage.setItem(this.key, JSON.stringify(this.#value));
  }

  getFromStorage() {
    let value = localStorage.getItem(this.key);
    try {
      value = JSON.parse(value);
    } catch {
      value = [];
    }
    value = !value ? [] : value;
    return value;
  }
  getValue() {
    return this.#value;
  }
}

export default new LocalStorageApi('favorite');
