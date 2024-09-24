/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  let maxScore = 0;
  let maxLeft = values[0]
  for (let i = 1; i < values.length; i++) {
    maxScore = Math.max(maxScore, maxLeft + values[i] - i)
    maxLeft = Math.max(maxLeft, values[i] + i)
  }
  return maxScore
};

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));
console.log(maxScoreSightseeingPair([1, 2]));

// function findMaxAndSecondMaxIndices(arr) {
//   if (arr.length < 2) {
//     return null; // 数组长度不足
//   }

//   let maxIndex = -1;
//   let secondMaxIndex = -1;

//   for (let i = 0; i < arr.length; i++) {
//     if (maxIndex === -1 || arr[i] > arr[maxIndex]) {
//       secondMaxIndex = maxIndex; // 更新第二大下标
//       maxIndex = i; // 更新最大下标
//     } else if (secondMaxIndex === -1 || (arr[i] > arr[secondMaxIndex] && arr[i] !== arr[maxIndex])) {
//       secondMaxIndex = i; // 更新第二大下标
//     }
//   }

//   return { maxIndex, secondMaxIndex };
// }

// function mergeSort(arr) {
//   // 如果数组长度小于等于1，直接返回数组
//   if (arr.length <= 1) {
//       return arr;
//   }

//   // 找到中间索引
//   const middle = Math.floor(arr.length / 2);
//   // 递归地分割数组
//   const left = mergeSort(arr.slice(0, middle));
//   const right = mergeSort(arr.slice(middle));

//   // 合并两个排序好的数组
//   return merge(left, right);
// }

// function merge(left, right) {
//   let result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   // 合并两个数组
//   while (leftIndex < left.length && rightIndex < right.length) {
//       if (left[leftIndex] < right[rightIndex]) {
//           result.push(left[leftIndex]);
//           leftIndex++;
//       } else {
//           result.push(right[rightIndex]);
//           rightIndex++;
//       }
//   }

//   // 合并剩余的元素
//   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }
