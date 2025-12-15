/*
给你一个整数数组 prices ，表示一支股票的历史每日股价，其中 prices[i] 是这支股票第 i 天的价格。

一个平滑下降的阶段定义为：对于连续一天或者多天，每日股价都比前一日股价恰好少 1，这个阶段第一天的股价没有限制。

请你返回平滑下降阶段的数目。

示例 1：
输入：prices = [3,2,1,4]
输出：7
解释：总共有 7 个平滑下降阶段：
[3], [2], [1], [4], [3,2], [2,1] 和 [3,2,1]
注意：仅一天按照定义也是平滑下降阶段。

示例 2：
输入：prices = [8,6,7,7]
输出：4
解释：总共有 4 个连续平滑下降阶段：[8], [6], [7] 和 [7]
由于 8 - 6 ≠ 1，所以 [8,6] 不是平滑下降阶段。

示例 3：
输入：prices = [1]
输出：1
解释：总共有 1 个平滑下降阶段：[1]
*/

/**
 * 解题思路
 * 1. 遍历数组的时候找到最长的子周期，比如 3,2,1 是一个下降区间，找到这个区间内所有的子周期
 * 2. 计算这个子周期的数量其实是一个等差数列的求和，比如 5,4,3 是一个下降区间，这个区间的长度为3，公差为 1， 也就是算 3,2,1 这个等差数列的和，我们已知首项，末项，公差，项数，就可以按公式 n * (a1 + an) / 2 来计算。
 * 3. 我们可以把设置一个计数器，初始值为 1，从数组第二个元素开始遍历，如果当前元素比上一个元素小 1 ，则计数器 + 1，否则我们就将 res += count * (count + 1) / 2, 然后将 count 重置为 1.
 * 4. 在结束遍历后，还需要再一次将 res += count * (count + 1) / 2, 因为最后一个区间没有被计算到，我们在 else 里是把 res 和上一个区间的计算累加。
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function (prices) {
  let count = 1;
  let res = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] === prices[i - 1] - 1) {
      count++;
    } else {
      res += count * (count + 1) / 2;
      count = 1;
    }
  }
  return res + count * (count + 1) / 2;
};


console.log(getDescentPeriods([3, 2, 1, 4]));
console.log(getDescentPeriods([8, 6, 7, 7]));
console.log(getDescentPeriods([1]));
console.log(getDescentPeriods([5, 4, 3, 7, 6]));