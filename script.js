import HashMap from "./classes/hashMap.js";

const newHashMap = new HashMap(0.8, 16);

const testStrings = [
  { key: "VAQzNHxGZc", value: "" },
  { key: "cnaJrADYfY", value: "" },
  { key: "nDZQceOtwV", value: "" },
  { key: "IKuZKMlIwn", value: "" },
  { key: "JPxnsUePAX", value: "" },
  { key: "XqMLNJDntQ", value: "" },
  { key: "WIsZfgAWYe", value: "" },
  { key: "yDyvQqsVfg", value: "" },
  { key: "yxGjTJskqm", value: "" },
  { key: "KONhEISnUG", value: "" },
  { key: "TTEWDzzvZl", value: "" },
  { key: "evCSkJBYrk", value: "" },
  { key: "GllTeDZQqj", value: "" },
  { key: "cIxEqtsvbL", value: "" },
  { key: "raNslUCcpM", value: "" },
  { key: "IgKwqOpvTW", value: "" },
  { key: "nYJyBHJxtD", value: "" },
  { key: "AjjmHrmahX", value: "" },
  { key: "saEHCLwGtw", value: "" },
  { key: "hKQHeulnFa", value: "" },
  { key: "GMRmgwSyxx", value: "" },
  { key: "UtqOKnPTID", value: "" },
  { key: "JEVogIYlTk", value: "" },
  { key: "LejIQhTTTu", value: "" },
  { key: "IhTpidONQP", value: "" },
  { key: "YWbjrHBEVF", value: "" },
  { key: "KHHREbMqpH", value: "" },
  { key: "koXuZEphTL", value: "" },
  { key: "oQAtnFOCZs", value: "" },
  { key: "nMyySZnEUl", value: "" },
  { key: "UglSQPPObQ", value: "" },
  { key: "kJPGGMYarr", value: "" },
  { key: "RkFQFPuFVz", value: "" },
  { key: "ICgCOVbbSW", value: "" },
  { key: "rdIhqlHSZY", value: "" },
  { key: "IKKWoniPaq", value: "" },
  { key: "tbgTtxbyob", value: "" },
  { key: "QsIaGInBLJ", value: "" },
  { key: "YLvknuDEho", value: "" },
  { key: "lYVkAibADh", value: "" },
  { key: "qERPuVFgxS", value: "" },
  { key: "MZFCiDXwnV", value: "" },
  { key: "AbPoZjZGAi", value: "" },
  { key: "ObIbBhQqwR", value: "" },
  { key: "ylRLiMxxqL", value: "" },
  { key: "seAtjCBtPu", value: "" },
  { key: "ANwlABsgss", value: "" },
  { key: "owcIREnXxm", value: "" },
  { key: "pYdCitAFoW", value: "" },
  { key: "DxwahFCDHn", value: "" },
  { key: "EFKFnXbuhi", value: "" },
  { key: "uDrGpbsEaD", value: "" },
  { key: "aSryroHkeO", value: "" },
  { key: "XHIKGZMwdo", value: "" },
  { key: "oLJiEQJggd", value: "" },
  { key: "ZlKGljShDd", value: "" },
  { key: "tOMpiVanQO", value: "" },
  { key: "GIKpPtFXZq", value: "" },
  { key: "XBMCGYjFJU", value: "" },
  { key: "vpsKOBKeVX", value: "" },
  { key: "PIzNistcbV", value: "" },
  { key: "SfSGnjTFjA", value: "" },
  { key: "YYwObcxwvq", value: "" },
  { key: "cuaEHcKeoH", value: "" },
  { key: "IlVvpTvJIT", value: "" },
  { key: "kxUUJzlAyE", value: "" },
  { key: "NyBdWDWKXO", value: "" },
  { key: "GDAcsSpPwi", value: "" },
  { key: "eShBkYTxUd", value: "" },
  { key: "rdyQlouzeB", value: "" },
  { key: "ylVxXbNskI", value: "" },
  { key: "WdjNSjItGO", value: "" },
  { key: "LYEYVrcAKJ", value: "" },
  { key: "GhwSfTjKOq", value: "" },
  { key: "AcHJERHMnn", value: "" },
  { key: "wFZZDNPRYS", value: "" },
  { key: "GLwFiyfleP", value: "" },
  { key: "ezqgqvAcxT", value: "" },
  { key: "YVLuZRUsdx", value: "" },
  { key: "OZvOjrUXGF", value: "" },
  { key: "BVGguBGdbr", value: "" },
  { key: "jsQulfckxP", value: "" },
  { key: "XHMqUCjGdA", value: "" },
  { key: "pBzQuRqKWA", value: "" },
  { key: "MPjCIUFkue", value: "" },
  { key: "RrrWNAaKOE", value: "" },
  { key: "SfEZucVxFe", value: "" },
  { key: "NemIQuhYet", value: "" },
  { key: "vxBFtGqosf", value: "" },
  { key: "tullLhGuTj", value: "" },
  { key: "NivlMkfuwl", value: "" },
  { key: "oEwpfMRIqn", value: "" },
  { key: "GhTdluMjWA", value: "" },
  { key: "wOLtWFiJSk", value: "" },
  { key: "kfldgWJrpc", value: "" },
  { key: "RHRpJMdnuj", value: "" },
  { key: "DASQnqYiZN", value: "" },
  { key: "UXBJCIxSaD", value: "" },
  { key: "ujHvLuoNQk", value: "" },
  { key: "bPfofCrAJs", value: "" },
];

// set(key, value)
let i = 1;
testStrings.forEach((str) => {
  str.value = `item ${i}`;

  newHashMap.set(str.key, str);
  i++;
});

// get(key)
// console.log("Get existing key:", newHashMap.get("pBzQuRqKWA"));
// console.log("Get non-existing key:", newHashMap.get("pBzQuRqKW"));

// has(key)
// console.log("Has:", newHashMap.has("pBzQuRqKWA"));
// console.log("Has not:", newHashMap.has("pBzQuRqKW"));

// remove(key)

// length()
// console.log("HashMap length:", newHashMap.length());
// console.log("HashMap capacity:", newHashMap.content.length);

// clear()
// newHashMap.clear();

// keys()
// console.log("HashMap keys:", newHashMap.keys());

// values()
// console.log("HashMap values:", newHashMap.values());

// entries()
// console.log("HashMap entries:", newHashMap.entries());
