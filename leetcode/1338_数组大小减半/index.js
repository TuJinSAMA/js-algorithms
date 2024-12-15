/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  const len = arr.length;
  const countFrequencies = (arr) => {
    let obj = {}
    arr.forEach(item => {
      obj[item] = obj[item] ? obj[item] + 1 : 1;
    })
    return obj
  }
  let countObj = countFrequencies(arr)
  let count = 1;
  const entries = Object.entries(countObj);
  entries.sort((a, b) => b[1] - a[1]);
  if (entries.length === 1) {
    return 1
  }
  let num = 0
  entries.some(item => {
    num += item[1]
    if (num >= (len / 2)) {
      return true
    }
    count += 1
    return false
  })

  return count;
};

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]));
console.log(minSetSize([7, 7, 7, 7, 7, 7]));