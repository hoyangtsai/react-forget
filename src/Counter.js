export default class Counter {
  constructor() {
    this.data = {};
  }

  set(name = 'default') {
    if (!(name in this.data)) {
      this.clear(name);
    }
    this.data[name]++;
  }

  get(name = 'default') {
    if (name in this.data) {
      return this.data[name];
    }
  }

  clear(name = 'label') {
    this.data[name] = -1;
  }

  reset() {
    this.data = {};
  }
}
