class Store {
  constructor(key) {
    this.key = key;
  }

  save(data) {
    const json = JSON.stringify(data);
    localStorage.setItem(this.key, json);
  }

  load(def) {
    const json = localStorage.getItem(this.key) ?? JSON.stringify(def);
    return JSON.parse(json);
  }
}

export default Store;
