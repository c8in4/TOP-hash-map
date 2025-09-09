export default class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = [];
  }

  updateCapacity() {
    this.capacity *= 2;

    const currentElements = this.entries();
    this.clear();

    currentElements.forEach((element) => {
      this.set(element[0], element[1]);
    });
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    if (this.length() > this.loadFactor * this.capacity) {
      this.updateCapacity();
    }
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = { [key]: value };
    } else {
      this.buckets[index][key] = value;
    }
  }

  get(key) {
    const index = this.hash(key);
    if (!this.has(key)) return null;
    return this.buckets[index][key];
  }

  has(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return false;
    return key in this.buckets[index];
  }

  remove(key) {
    if (!this.has(key)) return false;
    const index = this.hash(key);
    delete this.buckets[index][key];
    return true;
  }

  length() {
    let length = 0;
    this.buckets.forEach((bucket) => (length += Object.keys(bucket).length));
    return length;
  }

  clear() {
    this.buckets = [];
    return;
  }

  keys() {
    let keys = [];
    this.buckets.forEach((bucket) => (keys = keys.concat(Object.keys(bucket))));
    return keys;
  }

  values() {
    let values = [];
    this.buckets.forEach(
      (bucket) => (values = values.concat(Object.values(bucket)))
    );
    return values;
  }

  entries() {
    const entries = [];
    const keys = this.keys();
    const values = this.values();
    for (let i = 0; i < keys.length; i++) {
      const newEntry = [keys[i], values[i]];
      entries.push(newEntry);
    }
    return entries;
  }
}
