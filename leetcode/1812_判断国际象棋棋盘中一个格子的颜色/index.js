/*
 * @Author: gyq tujinsama@gmail.com
 * @Date: 2024-12-09 22:54:15
 * @LastEditors: gyq tujinsama@gmail.com
 * @LastEditTime: 2024-12-09 23:00:00
 * @FilePath: /js-algorithms/leetcode/1812_判断国际象棋棋盘中一个格子的颜色/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
  return (coordinates.charCodeAt(0) + coordinates.charCodeAt(1)) % 2 !== 0;
};


console.log(squareIsWhite('a7'))
console.log(squareIsWhite('a8'))