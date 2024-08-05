import { LinkedList } from "../data-structures/linked-list.js";

let linked = new LinkedList();
linked.push(1);
linked.push(2);
linked.push(3);
console.log(linked);

linked.removeAt(1);
console.log(linked);

linked.insert(4, 2);
console.log(linked);
console.log(linked.indexOf(4));

console.log(linked.toString());
console.log(linked.getElementAt(linked.size() - 1));