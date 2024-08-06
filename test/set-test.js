import { Set } from "../data-structures/set.js";

const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);

console.log(set.size());
set.delete(5)
console.log(set.has(5));

console.log(set.values());

const set2 = new Set();
set2.add(1);
set2.add(3);
set2.add(5);

console.log(set.intersection(set2));