export default class Counter {
  constructor() {
    this.data = {};
  }

  set(name = 'default') {
    if (!(name in this.data)) {
      this.clear(name);
    } else {
      this.data[name]++;
    }
  }

  get(name = 'default') {
    if (name in this.data) {
      return this.data[name];
    }
  }

  clear(name) {
    this.data[name] = 0;
  }

  reset() {
    this.data = {};
  }
}
