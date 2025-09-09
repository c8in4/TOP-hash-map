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

// const testStrings = [
//   "VzcArKuNkg",
//   "XOrXUMfGpl",
//   "lIulBMInxd",
//   "vZQFVmIbXJ",
//   "eYRcBZUhAs",
//   "AjCYrcUYkS",
//   "ColnozSbJg",
//   "ZrJjAWKLdQ",
//   "WYYCRlhJpN",
//   "HEAdfVeUfb",
//   "moQfterrkR",
//   "WjUboYKNRk",
//   "TAvSvPcjlm",
//   "RSbOoyKtFj",
//   "VLLGSMxWnF",
//   "ydSsFAoHtr",
//   "PAthMTbJQU",
//   "aYgzurMZMA",
//   "LTckMVQpFe",
//   "ZpoAThZWOW",
//   "QEZOTxcCkI",
//   "cLkJWfSsZf",
//   "QfvnEKHHdC",
//   "EjXSKrKtqV",
//   "CFFpxeewOF",
//   "wOSVeRdAkY",
//   "zyjpGBEqzD",
//   "kKcjTztjGH",
//   "whWcyFxMLY",
//   "EcwSDucfdP",
//   "PRxCAhBvgJ",
//   "IQKGwPzbih",
//   "IkejTCtYIs",
//   "sguXDPbNRe",
//   "UxszOiDsZm",
//   "nSzsatZeiY",
//   "kCKltsAAaN",
//   "pTzAtxWPJY",
//   "RNNIstqDHX",
//   "qduISHYknx",
//   "vDmxLYkBQv",
//   "RwJyXewVqF",
//   "bOEEshwmMz",
//   "yLdRGoJKnR",
//   "tLJTMzHqJQ",
//   "nLebaWeOhm",
//   "DswlbBIuPD",
//   "QhAqJVILLA",
//   "IDQwMPkBKR",
//   "vFKJjBCKnr",
//   "YpcIFCyLUq",
//   "AgzcLDsuSi",
//   "EibhkItFLC",
//   "lyNQmlyWQu",
//   "ZSJxQBnDbY",
//   "PoGLsDJmsQ",
//   "qykXRmAbLO",
//   "gjEyrkBgKV",
//   "BYkORQpNam",
//   "tIIMydpBWY",
//   "RdqpdgpoLs",
//   "mvJGjNkNpT",
//   "hkkwAAiCCt",
//   "KvPVqXtxrH",
//   "XwcbsWAZMp",
//   "DFYKsjSnuC",
//   "UQYhDfliIz",
//   "YxSLTkjUrJ",
//   "yYKUXYmFfR",
//   "AEAJQkDeXz",
//   "jatJNzAQIG",
//   "dRQABcHvdH",
//   "VibRwGcooj",
//   "QuNOxruQQK",
//   "pdxZMALFZt",
//   "jyRtFqUYuf",
//   "DAcVGhjKqE",
//   "dsdjakTmhL",
//   "EmPIRrTJvf",
//   "qEsYuxHjiO",
//   "cIyKkVLlnG",
//   "yVVFlAPEdt",
//   "pZYSOzeZMD",
//   "AAzixvXxLe",
//   "FMwJtYpqLX",
//   "cCUVSpBJOh",
//   "gHixAtLccL",
//   "UDYZJyQyXw",
//   "SOVaHaEaKl",
//   "TsLiRNfgWd",
//   "KnCXzRGcwM",
//   "mjxhBhsQQy",
//   "jAGaTPHXwh",
//   "rgGoHDtMMV",
//   "qQjmJXTylH",
//   "WUEktKbHsT",
//   "LMLXPjYyCC",
//   "NXrhdyvlqc",
//   "lkvjXxyjkh",
//   "hYxPglVSrB",
//   "zmJiIzkFVA",
//   "LrHjuEOvvS",
//   "cfcRgxgUKo",
//   "ffAMvGVCAY",
//   "GindTbIxqD",
//   "QXvPZrLDTY",
//   "lJOFKETusA",
//   "wNnAldZMgs",
//   "PsbUOfxYDK",
//   "pcBvwpLvWU",
//   "GYwPTtEEeP",
//   "rDcPmUDhNR",
//   "lHSBgPTjDx",
//   "BxyMHpgisU",
//   "EYriUxrqdZ",
//   "sSHRgIoSPZ",
//   "dPQWOGxBuX",
//   "eDXIUWkAnL",
//   "jssqGHxwOH",
//   "JiSeCNcNvX",
//   "adexPDDUfD",
//   "TgYqJnZGbJ",
//   "gwEYPIIAMy",
//   "kkpdlbVhXf",
//   "OsIkAOgsoW",
//   "MrzaKuLNnK",
//   "mIbOFbvKeE",
//   "ocFYWYkjRj",
//   "uCLaaAIZpq",
//   "QoPGZslaXd",
// ];

// (function () {
//   let i = 1;
//   testStrings.forEach((str) => {
//     test.set(str, `item ${i++}`);
//   });
// })();

// set(key, value)
test.set("apple", "green");

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
console.log("HashMap keys:", test.keys());

// values()
console.log("HashMap values:", test.values());

// entries()
console.log("HashMap entries:", test.entries());

console.log(test.buckets);
console.log(test.capacity);
