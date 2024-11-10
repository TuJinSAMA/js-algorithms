/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNonDuplicate = function (nums) {
//   for (let i = 0; i < nums.length; i += 2) {
//     const current = nums[i];
//     const next = nums[i + 1];
//     if (current !== next) return current;
//   }
// };

// 全数组的二分查找写法
// 按异或位运算符
// 如果 mid 是偶数，则 mid ^ 1 = mid + 1，如果 mid 是奇数，则 mid ^ 1 = mid - 1
var singleNonDuplicate = function (nums) {
  let low = 0, high = nums.length - 1;
  while (low < high) {
    let mid = Math.floor((high - low) / 2) + low;
    if (nums[mid] === nums[mid ^ 1]) {
      low = mid + 1;
    } else {
      high = mid;
    } 
  }
  return nums[low];
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));