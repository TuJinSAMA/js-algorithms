import { recursionFactorial, fibonacciMemoization, fibonacciIterative } from "../data-structures/util.js";

const res = recursionFactorial(5);

console.log(res);

console.log(fibonacciMemoization(5));
console.log(fibonacciIterative(5));