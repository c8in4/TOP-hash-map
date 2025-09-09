import LinkedList from "./linkedList.js";
export default class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.content = [];
  }

  checkForResize() {
    const resize = this.loadFactor * this.capacity;
    if (this.length() + 1 > resize) {
      this.capacity *= 2;
      // console.log("new capacity", this.capacity);

      const currentElements = this.values();
      this.clear();
      currentElements.forEach((element) => {
        this.set(element.key, element);
      });
      // console.log("capacity doubled and elements copied");
      return;
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

  // dealing with collisions using linked lists
  // TODO: if key already exists, overwrite old value
  set(key, value) {
    const index = this.hash(key);
    const data = { key, value };
    this.checkForResize();
    if (!this.content[index]) {
      const newLinkedList = new LinkedList();
      newLinkedList.append(data);
      this.content[index] = newLinkedList;
    } else {
      this.content[index].append(data);
    }
    // return console.log(`${value} set`);
  }

  // return value or null
  get(key) {
    const hashMapIndex = this.hash(key);
    const linkedListIndex = this.content[hashMapIndex]
      ? this.content[hashMapIndex].find(key)
      : null;

    return linkedListIndex == null
      ? null
      : this.content[hashMapIndex].at(linkedListIndex).value;
  }

  // return true or false
  has(key) {
    const hashMapIndex = this.hash(key);
    return this.content[hashMapIndex]
      ? this.content[hashMapIndex].contains(key)
      : false;
  }

  // remove entry and return true or return false
  remove(key) {
    if (!this.has(key)) return false;
    // console.log("can not remove item - item does not exist");

    const hashMapIndex = this.hash(key);
    const linkedListIndex = this.content[hashMapIndex].find(key);

    this.content[hashMapIndex].removeAt(linkedListIndex);
    // console.log(this.content[hashMapIndex].at(linkedListIndex));

    // console.log("item has been removed");

    return true;
  }

  // return the number of stored keys
  length() {
    let length = 0;
    this.content.forEach((bucket) => {
      if (bucket) length += bucket.size();
    });
    return length;
  }

  // remove all entries
  clear() {
    this.content = [];
    // console.log("hashMap has been cleared");
    return;
  }

  // return an array of all keys
  keys() {
    const keys = [];
    this.content.forEach((bucket) => {
      if (!bucket) return;
      const objects = bucket.toArray();
      if (!objects) return;
      objects.forEach((object) => {
        if (!object) return;
        keys.push(object.key);
      });
    });

    return keys;
  }

  // return an array of all the values
  values() {
    const values = [];
    this.content.forEach((bucket) => {
      if (!bucket) return;
      const objects = bucket.toArray();
      if (!objects) return;
      objects.forEach((object) => {
        if (!object) return;
        values.push(object.value);
      });
    });
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
// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bounds");
// }
