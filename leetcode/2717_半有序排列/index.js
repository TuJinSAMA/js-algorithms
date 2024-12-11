/*
 * @Author: gyq tujinsama@gmail.com
 * @Date: 2024-12-11 22:26:06
 * @LastEditors: gyq tujinsama@gmail.com
 * @LastEditTime: 2024-12-11 22:35:52
 * @FilePath: /js-algorithms/leetcode/2717_半有序排列/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function (nums) {
  const n = nums.length;
  let base = nums.indexOf(1)
  let nIndex = nums.indexOf(n)
  return base < nIndex ? base + (n - nIndex - 1) : base + (n - nIndex - 1) - 1;
};

console.log(semiOrderedPermutation([2, 1, 4, 3]))
console.log(semiOrderedPermutation([2, 4, 1, 3]))
console.log(semiOrderedPermutation([1, 3, 4, 2, 5]))