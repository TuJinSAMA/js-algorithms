/*
 * @Author: gyq tujinsama@gmail.com
 * @Date: 2024-12-05 20:39:54
 * @LastEditors: gyq tujinsama@gmail.com
 * @LastEditTime: 2024-12-05 21:43:42
 * @FilePath: /js-algorithms/leetcode/3001_捕获黑皇后需要的最少移动次数/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {number} e
 * @param {number} f
 * @return {number}
 */
var minMovesToCaptureTheQueen = function (a, b, c, d, e, f) {
  if (a === e && (c !== a || d <= Math.min(b, f) || d >= Math.max(b, f))) return 1;
  if (b === f && (d !== b || c <= Math.min(a, e) || c >= Math.max(a, e))) return 1;
  if (Math.abs(c - e) === Math.abs(d - f) && ((c - e) * (b - f) !== (a - e) * (d - f) || a < Math.min(c, e) || a > Math.max(c, e))) return 1
  return 2;
};

console.log(minMovesToCaptureTheQueen(1, 1, 8, 8, 2, 3))
console.log(minMovesToCaptureTheQueen(5, 3, 3, 4, 5, 2))