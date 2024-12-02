/*
 * @Author: gyq tujinsama@gmail.com
 * @Date: 2024-12-02 22:42:49
 * @LastEditors: gyq tujinsama@gmail.com
 * @LastEditTime: 2024-12-02 22:48:44
 * @FilePath: /js-algorithms/leetcode/52_N皇后II/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  const backtrack = (row, cols, diag1, diag2) => {
    if (row === n) {
      return 1;
    } else { 
      let count = 0;
      for (let col = 0; col < n; col++) {
        if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;
        cols.add(col);
        diag1.add(row - col);
        diag2.add(row + col);
        count += backtrack(row + 1, cols, diag1, diag2);
        cols.delete(col);
        diag1.delete(row - col);
        diag2.delete(row + col);
      }
      return count;
    }
  }
  let cols = new Set(), diag1 = new Set(), diag2 = new Set();
  return backtrack(0, cols, diag1, diag2);
};
console.log(totalNQueens(4))
console.log(totalNQueens(1))