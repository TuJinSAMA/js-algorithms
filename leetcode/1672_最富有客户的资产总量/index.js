/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  return accounts.reduce((max, arr) => {
    return Math.max(arr.reduce((cur, next) => cur + next), max)
  }, 0)
};


console.log(maximumWealth([[1,2,3],[3,2,1]]));
console.log(maximumWealth([[1,5],[7,3],[3,5]]));