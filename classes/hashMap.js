import LinkedList from "./linkedList.js";
export default class HashMap {
  constructor(loadFactor, capacity) {
    this.capacity = capacity;
    this.content = [];
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
    // if key already exists, overwrite old value
    // dealing with collisions using linked lists
    const index = this.hash(key);
    const data = { key, value };

    if (!this.content[index]) {
      const newLinkedList = new LinkedList();
      newLinkedList.append(data);
      this.content[index] = newLinkedList;
    } else {
      this.content[index].append(data);
    }
  }

  get(key) {
    // return value or null
    const hashMapIndex = this.hash(key);
    const linkedListIndex = this.content[hashMapIndex]
      ? this.content[hashMapIndex].find(key)
      : null;

    return linkedListIndex == null
      ? null
      : this.content[hashMapIndex].at(linkedListIndex).value;
  }

  has(key) {
    // return true or false
    const hashMapIndex = this.hash(key);
    return this.content[hashMapIndex]
      ? this.content[hashMapIndex].contains(key)
      : false;
  }

  remove(key) {
    // remove entry and return true or return false
  }

  length() {
    // return the number of stored keys
    let length = 0;
    this.content.forEach((bucket) => {
      length += bucket.size();
    });
    return length;
  }

  clear() {
    // remove all entries
    this.content = [];
  }

  keys() {
    // return an array of all keys
  }

  values() {
    // return an array of all the values
  }

  entries() {
    // return an array that contains all 'key, value' pairs
    // format: [[firstKey, firstValue], [secondKey, secondValue]]
  }
}

// snippet to limit hashMap size
// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bounds");
// }
