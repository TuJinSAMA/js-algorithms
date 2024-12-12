/*
 * @Author: gyq tujinsama@gmail.com
 * @Date: 2024-12-12 20:45:10
 * @LastEditors: gyq tujinsama@gmail.com
 * @LastEditTime: 2024-12-12 21:33:00
 * @FilePath: /js-algorithms/leetcode/2931_购买物品的最大开销/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[][]} values
 * @return {number}
 */
var maxSpending = function (values) {
  let max_heap = []
  for (const row of values) {
    for (const num of row) {
      // 先以负数的形式将二维数组展开
      // 用负数构建最大堆
      max_heap.push(-num)
    }
  }
  const heapify = (arr) => {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapifyDown(arr, i, n);
    }
  }
  const heapifyDown = (arr, i, n) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) {
      largest = left
    }
    if (right < n && arr[right] > arr[largest]) {
      largest = right
    }
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]
      heapifyDown(arr, largest, n)
    }
  }
  heapify(max_heap)
  const popMax = (heap) => {
    const max = heap[0]
    const last = heap.pop()
    if (heap.length > 0) {
      heap[0] = last;
      heapifyDown(heap, 0, heap.length)
    }
    return max;
  }
  const sortedArray = []
  while (max_heap.length > 0) {
    sortedArray.push(-popMax(max_heap))
  }
  return sortedArray.reduce((total, cur, index) => {
    return total += cur * (index + 1)
  }, 0)
};

console.log(maxSpending([[8, 5, 2], [6, 4, 1], [9, 7, 3]]))
console.log(maxSpending([[10, 8, 6, 4, 2], [9, 7, 5, 3, 2]]))