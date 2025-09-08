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
  //   "kJPGGMYarr",
  //   "RkFQFPuFVz",
  //   "ICgCOVbbSW",
  //   "rdIhqlHSZY",
  //   "IKKWoniPaq",
  //   "tbgTtxbyob",
  //   "QsIaGInBLJ",
  //   "YLvknuDEho",
  //   "lYVkAibADh",
  //   "qERPuVFgxS",
  //   "MZFCiDXwnV",
  //   "AbPoZjZGAi",
  //   "ObIbBhQqwR",
  //   "ylRLiMxxqL",
  //   "seAtjCBtPu",
  //   "ANwlABsgss",
  //   "owcIREnXxm",
  //   "pYdCitAFoW",
  //   "DxwahFCDHn",
  //   "EFKFnXbuhi",
  //   "uDrGpbsEaD",
  //   "aSryroHkeO",
  //   "XHIKGZMwdo",
  //   "oLJiEQJggd",
  //   "ZlKGljShDd",
  //   "tOMpiVanQO",
  //   "GIKpPtFXZq",
  //   "XBMCGYjFJU",
  //   "vpsKOBKeVX",
  //   "PIzNistcbV",
  //   "SfSGnjTFjA",
  //   "YYwObcxwvq",
  //   "cuaEHcKeoH",
  //   "IlVvpTvJIT",
  //   "kxUUJzlAyE",
  //   "NyBdWDWKXO",
  //   "GDAcsSpPwi",
  //   "eShBkYTxUd",
  //   "rdyQlouzeB",
  //   "ylVxXbNskI",
  //   "WdjNSjItGO",
  //   "LYEYVrcAKJ",
  //   "GhwSfTjKOq",
  //   "AcHJERHMnn",
  //   "wFZZDNPRYS",
  //   "GLwFiyfleP",
  //   "ezqgqvAcxT",
  //   "YVLuZRUsdx",
  //   "OZvOjrUXGF",
  //   "BVGguBGdbr",
  //   "jsQulfckxP",
  //   "XHMqUCjGdA",
  //   "pBzQuRqKWA",
  //   "MPjCIUFkue",
  //   "RrrWNAaKOE",
  //   "SfEZucVxFe",
  //   "NemIQuhYet",
  //   "vxBFtGqosf",
  //   "tullLhGuTj",
  //   "NivlMkfuwl",
  //   "oEwpfMRIqn",
  //   "GhTdluMjWA",
  //   "wOLtWFiJSk",
  //   "kfldgWJrpc",
  //   "RHRpJMdnuj",
  //   "DASQnqYiZN",
  //   "UXBJCIxSaD",
  //   "ujHvLuoNQk",
  //   "bPfofCrAJs",
];

let i = 0;
testStrings.forEach((str) => {
  newHashMap.set(str, `item ${i}`);
  i++;
});

// // console.log("HashMap content:", newHashMap.content[5]);
// newHashMap.content.forEach((element) => {
//   //   console.log(element.size());
// });

// console.log(i);

// console.log("nYJyBHJxtD");

// console.log(newHashMap.content[91]);

console.log("HashMap content:", newHashMap.length());

// console.log(newHashMap.get("eShBkYTxUd"));
