/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  for (let a = 0; a * a <= c; a++) {
    let b = Math.sqrt(c - a * a);
    if (b === parseInt(b)) return true;
  }
  return false;
};

console.log(judgeSquareSum(5));