/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
  const n = s.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    const count = [0, 0]
    for (let j = i; j < n; j++) {
      count[parseInt(s[j])]++;
      if (count[0] > k && count[1] > k) break;
      res++;
    }

  }
  return res;
};


console.log(countKConstraintSubstrings("10101", 1));
console.log(countKConstraintSubstrings("1010101", 2));
console.log(countKConstraintSubstrings("11111", 1));