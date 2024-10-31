export function defaultEquals(a, b) {
  return a === b;
}

export function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}

export function recursionFactorial(n, total = 1) {
  if (n <= 1) return total
  return recursionFactorial(n - 1, n * total);
}

export function fibonacciMemoization(n) {
  if (n < 1) return 0;
  const memo = [0, 1]
  const fibonacci = (n) => {
    if (memo[n] != null) return memo[n]
    return memo[n] = fibonacci(n - 1) + fibonacci(n - 2)
  }
  return fibonacci(n)
}


export function fibonacciIterative(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  let num2 = 0;
  let num1 = 1;
  let fibN = n;
  for (let i = 2; i <= n; i++) {
    fibN = num1 + num2;
    num2 = num1;
    num1 = fibN;
  }
  return fibN;
}


export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
}

export function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
}

export const Colors = {
  RED: 0,
  BLACK: 1,
}