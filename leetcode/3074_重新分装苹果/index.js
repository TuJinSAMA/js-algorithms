/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
  const total = apple.reduce((acc, cur) => acc + cur)

  capacity.sort((a, b) => b - a)
  let count = 1;
  let totalCapacity = capacity[0]
  for (let i = 1; i < capacity.length; i++) {
    if (totalCapacity >= total) {
      break;
    }
    count++;
    totalCapacity += capacity[i]
  }
  return count;
};

console.log(minimumBoxes([1, 3, 2], [4, 3, 1, 5, 2]))
console.log(minimumBoxes([5, 5, 5], [2, 4, 2, 7]))