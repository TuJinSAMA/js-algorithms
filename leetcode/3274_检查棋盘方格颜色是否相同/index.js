/*
 * @Author: gyq tujinsama@gmail.com
 * @Date: 2024-12-03 23:38:25
 * @LastEditors: gyq tujinsama@gmail.com
 * @LastEditTime: 2024-12-03 23:59:37
 * @FilePath: /js-algorithms/leetcode/3274_检查棋盘方格颜色是否相同/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function(coordinate1, coordinate2) {
  // const blackOdds = ['a', 'c', 'e', 'g'];
  // const [x1, y1] = coordinate1.split('');
  // const [x2, y2] = coordinate2.split('');
  // const isNotSameType = (blackOdds.includes(x1) && !blackOdds.includes(x2)) || (!blackOdds.includes(x1) && blackOdds.includes(x2));
  // console.log(isNotSameType, "isNotSameType")
  // return !isNotSameType ? (y1 % 2 === y2 % 2) : (y1 % 2 !== y2 % 2);
  return ((coordinate1.charCodeAt(0) - coordinate2.charCodeAt(0)) + (coordinate1.charCodeAt(1) - coordinate2.charCodeAt(1))) % 2 === 0;
};

// console.log("2".charCodeAt(0))
console.log(checkTwoChessboards('h7', 'c8'))
console.log(checkTwoChessboards('a1', 'h3'))