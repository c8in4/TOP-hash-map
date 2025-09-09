import HashMap from "./classes/hashMap.js";

const newHashMap = new HashMap(0.8, 16);

const testStrings = [
  "VAQzNHxGZc",
  "cnaJrADYfY",
  "nDZQceOtwV",
  "IKuZKMlIwn",
  "JPxnsUePAX",
  "XqMLNJDntQ",
  "WIsZfgAWYe",
  "yDyvQqsVfg",
  "yxGjTJskqm",
  "KONhEISnUG",
  "TTEWDzzvZl",
  "evCSkJBYrk",
  "GllTeDZQqj",
  "cIxEqtsvbL",
  "raNslUCcpM",
  "IgKwqOpvTW",
  "nYJyBHJxtD",
  "AjjmHrmahX",
  "saEHCLwGtw",
  "hKQHeulnFa",
  "GMRmgwSyxx",
  "UtqOKnPTID",
  "JEVogIYlTk",
  "LejIQhTTTu",
  "IhTpidONQP",
  "YWbjrHBEVF",
  "KHHREbMqpH",
  "koXuZEphTL",
  "oQAtnFOCZs",
  "nMyySZnEUl",
  "UglSQPPObQ",
  "kJPGGMYarr",
  "RkFQFPuFVz",
  "ICgCOVbbSW",
  "rdIhqlHSZY",
  "IKKWoniPaq",
  "tbgTtxbyob",
  "QsIaGInBLJ",
  "YLvknuDEho",
  "lYVkAibADh",
  "qERPuVFgxS",
  "MZFCiDXwnV",
  "AbPoZjZGAi",
  "ObIbBhQqwR",
  "ylRLiMxxqL",
  "seAtjCBtPu",
  "ANwlABsgss",
  "owcIREnXxm",
  "pYdCitAFoW",
  "DxwahFCDHn",
  "EFKFnXbuhi",
  "uDrGpbsEaD",
  "aSryroHkeO",
  "XHIKGZMwdo",
  "oLJiEQJggd",
  "ZlKGljShDd",
  "tOMpiVanQO",
  "GIKpPtFXZq",
  "XBMCGYjFJU",
  "vpsKOBKeVX",
  "PIzNistcbV",
  "SfSGnjTFjA",
  "YYwObcxwvq",
  "cuaEHcKeoH",
  "IlVvpTvJIT",
  "kxUUJzlAyE",
  "NyBdWDWKXO",
  "GDAcsSpPwi",
  "eShBkYTxUd",
  "rdyQlouzeB",
  "ylVxXbNskI",
  "WdjNSjItGO",
  "LYEYVrcAKJ",
  "GhwSfTjKOq",
  "AcHJERHMnn",
  "wFZZDNPRYS",
  "GLwFiyfleP",
  "ezqgqvAcxT",
  "YVLuZRUsdx",
  "OZvOjrUXGF",
  "BVGguBGdbr",
  "jsQulfckxP",
  "XHMqUCjGdA",
  "pBzQuRqKWA",
  "MPjCIUFkue",
  "RrrWNAaKOE",
  "SfEZucVxFe",
  "NemIQuhYet",
  "vxBFtGqosf",
  "tullLhGuTj",
  "NivlMkfuwl",
  "oEwpfMRIqn",
  "GhTdluMjWA",
  "wOLtWFiJSk",
  "kfldgWJrpc",
  "RHRpJMdnuj",
  "DASQnqYiZN",
  "UXBJCIxSaD",
  "ujHvLuoNQk",
  "bPfofCrAJs",
];

function createMockObjects(arrayOfStrings) {
  const data = [];
  let i = 1;
  arrayOfStrings.forEach((str) => {
    data.push({ key: str, value: `item ${i}` });
    i++;
  });
  return data;
}

const mockData = createMockObjects(testStrings);

// set(key, value)
mockData.forEach((object) => newHashMap.set(object.key, object));

// get(key)
console.log("Get existing key:", newHashMap.get("pBzQuRqKWA"));
console.log("Get non-existing key:", newHashMap.get("pBzQuRqKW"));

// has(key)
console.log("Has:", newHashMap.has("pBzQuRqKWA"));
console.log("Has not:", newHashMap.has("pBzQuRqKW"));

// remove(key)
console.log("remove item IlVvpTvJIT:", newHashMap.remove("IlVvpTvJIT"));
console.log("remove item GIKpPtFXZq:", newHashMap.remove("GIKpPtFXZq"));
console.log("remove non-existing item", newHashMap.remove("pBzQuRqKW"));

// length()
console.log("HashMap length:", newHashMap.length());

// clear()
// newHashMap.clear();

// keys()
console.log("HashMap keys:", newHashMap.keys());

// values()
console.log("HashMap values:", newHashMap.values());

// entries()
console.log("HashMap entries:", newHashMap.entries());

// The Odin Project - test
const test = new HashMap(0.8, 8);
test.set("apple", { key: "apple", value: "red" });
test.set("banana", { key: "banana", value: "yellow" });
test.set("carrot", { key: "carrot", value: "orange" });
test.set("dog", { key: "dog", value: "brown" });
test.set("elephant", { key: "elephant", value: "gray" });
test.set("frog", { key: "frog", value: "green" });
test.set("grape", { key: "grape", value: "purple" });
test.set("hat", { key: "hat", value: "black" });
test.set("ice cream", { key: "ice cream", value: "white" });
test.set("jacket", { key: "jacket", value: "blue" });
test.set("kite", { key: "kite", value: "pink" });
test.set("lion", { key: "lion", value: "golden" });

// console.log(test);
