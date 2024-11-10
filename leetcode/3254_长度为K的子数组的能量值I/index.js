/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 暴力解法 O(n * k)
// var resultsArray = function(nums, k) {
//   let results = [];
//   let res_len = nums.length - k + 1;
//   for (let i = 0; i < res_len; i++) {
//     const splitArr = nums.slice(i, i + k)
//     let count = 0;
//     let final = splitArr.reduce((pre, cur) => {
//       // console.log(cur, pre);
//       if (cur - pre === 1) {
//         count += 1;
//       }
//       return cur;
//     })
//     if (count === k - 1) {
//       results.push(final);
//     } else {
//       results.push(-1);
//     }
//   }
//   return results;
// };
// 统计长度解法 O(n)
var resultsArray = function (nums, k) {
  let ans = new Array(nums.length - k + 1).fill(-1);
  let count = 0; // 统计连续递增的个数
  for (let i = 0; i < nums.length; i++) {
    count = nums[i] === 0 || nums[i] - nums[i - 1] !== 1 ? 1 : count + 1;
    if (count >= k) {
      ans[i - k + 1] = nums[i];
    }
  }
  return ans;
}

console.log(resultsArray([1, 2, 3, 4, 3, 2, 5], 3));
console.log(resultsArray([2, 2, 2, 2, 2], 4));
console.log(resultsArray([3, 2, 3, 2, 3, 2], 2));