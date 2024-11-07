/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
  const ans = new Array(nums.length - k + 1).fill(-1);
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    count = i === 0 || nums[i] - nums[i - 1] !== 1 ? 1 : count + 1;
    if (count >= k) {
      ans[i - k + 1] = nums[i];
    }
  }
  return ans;
};