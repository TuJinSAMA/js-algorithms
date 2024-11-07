/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var losingPlayer = function (x, y) {
  let ops = Math.min(x, y >> 2);

  return ops % 2 === 1 ? "Alice" : "Bob"
};


console.log(losingPlayer(2, 7));
console.log(losingPlayer(4, 11));
console.log(losingPlayer(1, 1));
console.log(losingPlayer(2, 12));