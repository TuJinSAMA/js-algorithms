import { Dictionary } from "../data-structures/dictionary.js";

const dict = new Dictionary

dict.set("Hei", 990)
dict.set("Bai", 800)
dict.set("Hui", 765)

console.log(dict.hasKey("Hei"));

console.log(dict.toString());

console.log(dict.size());
dict.remove("Hui")
dict.set("Lin", 67890);
dict.set("Li", 542);
console.log(dict.keys());
console.log(dict.values());
console.log(dict.keyValues());