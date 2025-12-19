/**
 * @param {number[]} prices
 * @param {number[]} strategy
 * @param {number} k
 * @return {number}
 */
var maxProfit = function (prices, strategy, k) {
  let profit = 0;

  const n = prices.length;

  // 先计算初始 strategy 的利润
  for (let i = 0; i < n; i++) {
    profit += strategy[i] * prices[i];
  }

  let prefixSum = 0;
  let suffixSum = 0;
  let suffixStrategySum = 0;
  // 计算前 k/2 个 strategy * prices 的和
  for (let i = 0; i < k / 2; i++) {
    prefixSum += strategy[i] * prices[i];
  }

  // 计算后 k/2 个 prices 的和
  for (let i = k / 2; i < k; i++) {
    suffixSum += prices[i];
    suffixStrategySum += strategy[i] * prices[i];
  }
  // delta = 后 k/2 个 prices 的和 - 前 k/2 个 strategy * prices 的和 - 后 k/2 个 strategy * prices 的和
  let delta = suffixSum - prefixSum - suffixStrategySum;
  let deltas = [delta];
  // 滑动窗口，每次移动一个元素，计算新的 delta
  for (let i = 1; i + k <= n; i++) {
    // 移除左边的元素
    prefixSum -= strategy[i - 1] * prices[i - 1];

    // 中间的元素从后半移到前半
    const midIndex = i + k / 2 - 1;
    prefixSum += strategy[midIndex] * prices[midIndex];
    suffixSum -= prices[midIndex];
    suffixStrategySum -= strategy[midIndex] * prices[midIndex];

    // 右边移入一个
    suffixSum += prices[i + k - 1];
    suffixStrategySum += strategy[i + k - 1] * prices[i + k - 1];
    delta = suffixSum - prefixSum - suffixStrategySum
    deltas.push(delta)
  }

  return profit + Math.max(0, ...deltas);
};

console.log(maxProfit([4, 2, 8], [-1, 0, 1], 2))
console.log(maxProfit([5, 4, 3], [1, 1, 0], 2))