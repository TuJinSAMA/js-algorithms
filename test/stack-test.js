import { Stack } from "../data-structures/stack.js";

// const stack = new Stack();
// console.log(stack.isEmpty());

// stack.push(1);
// stack.push(2);

// console.log(stack.peek());

// stack.push(3);
// console.log(stack.size());
// console.log(stack.isEmpty());

// stack.push(15);
// stack.pop();
// stack.pop();
// console.log(stack.size());
// console.log(stack.toString());

function decimalToBinary(decimal) {
  const stack = new Stack();
  let rem;
  let binaryStr = "";
  let number = decimal;
  while (number > 0) {
    rem = Math.floor(number % 2);
    stack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!stack.isEmpty()) {
    binaryStr += stack.pop().toString();
  }
  return binaryStr;
}

console.log(decimalToBinary(233));