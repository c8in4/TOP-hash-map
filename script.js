import HashMap from "./classes/hashMap.js";

// The Odin Project - test
const test = new HashMap(0.8, 8);
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test.content);

// set(key, value)
// test.set("apple", "green");

// get(key)
console.log("Get frog:", test.get("frog"));
console.log("Get non-existent key:", test.get("pBzQuRqKW"));

// has(key)
console.log("Has:", test.has("carrot"));
console.log("Has not:", test.has("pBzQuRqKW"));

// remove(key)
console.log("remove grape:", test.remove("grape"));
console.log("remove non-existing item", test.remove("pBzQuRqKW"));

// length()
console.log("HashMap length:", test.length());

// clear()
// test.clear();

// keys()
// console.log("HashMap keys:", test.keys());

// values()
// console.log("HashMap values:", test.values());

// entries()
// console.log("HashMap entries:", test.entries());

console.log(test.buckets);
