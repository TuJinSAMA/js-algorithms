/**
 * @param {number} num
 * @return {number}
 */
// var numberOfSteps = function (num, count = 0) {
//   if (num === 0) return count;
//   return numberOfSteps(num % 2 === 0 ? (num / 2) : (num - 1), count + 1)
// };

/**
 * @param {number} num
 * @return {number}
 * 除法和减法可以用位运算代替
 * 位运算中的右移赋值 >>= 相当于除以2, <<= 左移赋值相当于乘以2
 * 而 (num & 1) 相当于 num % 2
 * 由于每个循环会多加一次计数, 所以最后要减 1
 */
var numberOfSteps = function (num, count = 0) {
  while (num > 0) {
    count += (num & 1) + 1;
    num >>= 1;
  }
  return Math.max(count - 1, 0)
};

console.log(numberOfSteps(14)); // 输出6
console.log(numberOfSteps(8)); // 输出4