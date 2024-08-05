import { Queue } from "../data-structures/queue.js";
import { Deque } from "../data-structures/deque.js";

// const queue = new Queue()

// queue.enqueue("第一")
// queue.enqueue("第二")

// console.log(queue.size());

// console.log(queue.dequeue());

// console.log(queue.peek());

// console.log(queue.toString());

function hotPotato(elementList, num) {
  const queue = new Queue();
  const elimitatedList = [];

  elementList.forEach((item) => {
    queue.enqueue(item);
  })

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    elimitatedList.push(queue.dequeue());
  }

  return {
    elimitated: elimitatedList,
    winner: queue.dequeue()
  }
}

const list = ["张三", "李四", "王五", "赵六", "钱七", "孙八", "周九", "吴十", "郑十一", "王十二"];
const result = hotPotato(list, 6);
result.elimitated.forEach((item) => {
  console.log(item + "被淘汰了");
})

console.log("胜者是", result.winner);

function palindromeChecker(str) {
  if (!str || str.length === 0) return false;
  const deque = new Deque();
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  for (let i = 0; i < str.length; i++) {
    deque.addBack(str.charAt(i));
  }
  let isEqual = true;
  while (deque.size() > 1 && isEqual) {
    const front = deque.removeFront();
    const back = deque.removeBack();
    if (front !== back) {
      isEqual = false;
    }
  }
  return isEqual;
}

console.log("aa", palindromeChecker("aa"));
console.log("kayak", palindromeChecker("kayak"));
console.log("level", palindromeChecker("level"));
console.log("Was it a car or a cat I saw", palindromeChecker("Was it a car or a cat I saw"));
console.log("Step on no pets", palindromeChecker("Step on no pets"));
