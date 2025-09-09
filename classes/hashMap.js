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

  // dealing with collisions
  // if key already exists, overwrite old value
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

  // return value or null
  get(key) {
    const index = this.hash(key);
    if (!this.has(key)) return null;
    return this.buckets[index][key];
  }

  // return true or false
  has(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return false;
    return key in this.buckets[index];
  }

  // remove entry and return true or return false
  remove(key) {
    if (!this.has(key)) return false;
    const index = this.hash(key);
    delete this.buckets[index][key];
    return true;
  }

  // return the number of stored keys
  length() {
    let length = 0;
    this.buckets.forEach((bucket) => (length += Object.keys(bucket).length));
    return length;
  }

  // remove all entries
  clear() {
    this.buckets = [];
    // console.log("hashMap has been cleared");
    return;
  }

  // return an array of all keys
  keys() {
    let keys = [];
    this.buckets.forEach((bucket) => (keys = keys.concat(Object.keys(bucket))));
    return keys;
  }

  // return an array of all the values
  values() {
    let values = [];
    this.buckets.forEach(
      (bucket) => (values = values.concat(Object.values(bucket)))
    );
    return values;
  }

  // return an array that contains all 'key, value' pairs
  // format: [[firstKey, firstValue], [secondKey, secondValue]]
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

// snippet to limit hashMap size
// if (index < 0 || index >= this.buckets.length) {
//   throw new Error("Trying to access index out of bounds");
// }
