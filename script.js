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
  // "KONhEISnUG",
  // "TTEWDzzvZl",
  // "evCSkJBYrk",
  // "GllTeDZQqj",
  // "cIxEqtsvbL",
  // "raNslUCcpM",
  // "IgKwqOpvTW",
  // "nYJyBHJxtD",
  // "AjjmHrmahX",
  // "saEHCLwGtw",
  // "hKQHeulnFa",
  // "GMRmgwSyxx",
  // "UtqOKnPTID",
  // "JEVogIYlTk",
  // "LejIQhTTTu",
  // "IhTpidONQP",
  // "YWbjrHBEVF",
  // "KHHREbMqpH",
  // "koXuZEphTL",
  // "oQAtnFOCZs",
  // "nMyySZnEUl",
  // "UglSQPPObQ",
  // "kJPGGMYarr",
  // "RkFQFPuFVz",
  // "ICgCOVbbSW",
  // "rdIhqlHSZY",
  // "IKKWoniPaq",
  // "tbgTtxbyob",
  // "QsIaGInBLJ",
  // "YLvknuDEho",
  // "lYVkAibADh",
  // "qERPuVFgxS",
  // "MZFCiDXwnV",
  // "AbPoZjZGAi",
  // "ObIbBhQqwR",
  // "ylRLiMxxqL",
  // "seAtjCBtPu",
  // "ANwlABsgss",
  // "owcIREnXxm",
  // "pYdCitAFoW",
  // "DxwahFCDHn",
  // "EFKFnXbuhi",
  // "uDrGpbsEaD",
  // "aSryroHkeO",
  // "XHIKGZMwdo",
  // "oLJiEQJggd",
  // "ZlKGljShDd",
  // "tOMpiVanQO",
  // "GIKpPtFXZq",
  // "XBMCGYjFJU",
  // "vpsKOBKeVX",
  // "PIzNistcbV",
  // "SfSGnjTFjA",
  // "YYwObcxwvq",
  // "cuaEHcKeoH",
  // "IlVvpTvJIT",
  // "kxUUJzlAyE",
  // "NyBdWDWKXO",
  // "GDAcsSpPwi",
  // "eShBkYTxUd",
  // "rdyQlouzeB",
  // "ylVxXbNskI",
  // "WdjNSjItGO",
  // "LYEYVrcAKJ",
  // "GhwSfTjKOq",
  // "AcHJERHMnn",
  // "wFZZDNPRYS",
  // "GLwFiyfleP",
  // "ezqgqvAcxT",
  // "YVLuZRUsdx",
  // "OZvOjrUXGF",
  // "BVGguBGdbr",
  // "jsQulfckxP",
  // "XHMqUCjGdA",
  // "pBzQuRqKWA",
  // "MPjCIUFkue",
  // "RrrWNAaKOE",
  // "SfEZucVxFe",
  // "NemIQuhYet",
  // "vxBFtGqosf",
  // "tullLhGuTj",
  // "NivlMkfuwl",
  // "oEwpfMRIqn",
  // "GhTdluMjWA",
  // "wOLtWFiJSk",
  // "kfldgWJrpc",
  // "RHRpJMdnuj",
  // "DASQnqYiZN",
  // "UXBJCIxSaD",
  // "ujHvLuoNQk",
  // "bPfofCrAJs",
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
// console.log("Get existing key:", newHashMap.get("pBzQuRqKWA"));
// console.log("Get non-existing key:", newHashMap.get("pBzQuRqKW"));

// has(key)
// console.log("Has:", newHashMap.has("pBzQuRqKWA"));
// console.log("Has not:", newHashMap.has("pBzQuRqKW"));
// console.log("Has:", newHashMap.has(mockData[34].key));

// remove(key)
// console.log("remove item pBzQuRqKWA:", newHashMap.remove("pBzQuRqKWA"));
// console.log("remove non-existing item", newHashMap.remove("pBzQuRqKW"));

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

newHashMap.test();
