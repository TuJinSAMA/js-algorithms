/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  return nums.reduce((res, cur) => {
    res.push((res[res.length - 1] || 0) + cur)
    return res
  }, [])
};


const nums = [1, 2, 3, 4]

console.log(runningSum(nums));