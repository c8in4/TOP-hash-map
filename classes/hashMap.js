export default class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = [];
  }

  checkCapacity() {
    if (this.length() > this.loadFactor * this.capacity) {
      this.capacity *= 2;

      //   // console.log("new capacity", this.capacity);
      //   const currentElements = this.values();
      //   this.clear();
      //   currentElements.forEach((element) => {
      //     this.set(element.key, element);
      //   });
      //   // console.log("capacity doubled and elements copied");
      //   return;
    }
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
    // const keys = [];
    // this.buckets.forEach((bucket) => {
    //   if (!bucket) return;
    //   const objects = bucket.toArray();
    //   if (!objects) return;
    //   objects.forEach((object) => {
    //     if (!object) return;
    //     keys.push(object.key);
    //   });
    // });
    // return keys;
  }

  // return an array of all the values
  values() {
    // const values = [];
    // this.buckets.forEach((bucket) => {
    //   if (!bucket) return;
    //   const objects = bucket.toArray();
    //   if (!objects) return;
    //   objects.forEach((object) => {
    //     if (!object) return;
    //     values.push(object.value);
    //   });
    // });
    // return values;
  }

  // return an array that contains all 'key, value' pairs
  // format: [[firstKey, firstValue], [secondKey, secondValue]]
  entries() {
    // const entries = [];
    // const keys = this.keys();
    // const values = this.values();
    // for (let i = 0; i < keys.length; i++) {
    //   const newEntry = [keys[i], values[i]];
    //   entries.push(newEntry);
    // }
    // return entries;
  }
}

// snippet to limit hashMap size
// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bounds");
// }
