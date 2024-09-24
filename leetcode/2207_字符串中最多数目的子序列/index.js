/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
var maximumSubsequenceCount = function (text, pattern) {
  let count = 0;
  let p1 = pattern[0]
  let p2 = pattern[1]
  for (let i = 0; i < text.length; i++) {
    let strArr = text.split('');
    strArr.splice(i, 0, p1);
    let new_str = strArr.join('');
  }
};


console.log(maximumSubsequenceCount("abdcdbc", "ac"));
console.log(maximumSubsequenceCount("aabb", "ab"));