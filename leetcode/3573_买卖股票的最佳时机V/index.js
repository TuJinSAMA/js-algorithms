/**
 * @param {number[]} prices
 * @param {number} k
 * @return {number}
 */
var maximumProfit = function (prices, k) {
  const n = prices.length;
  if (n === 0 || k === 0) return 0;

  // dp[i][j][state]: 第 i 天、完成 j 笔交易、状态的最大利润
  // state: 0 表示空仓, 1 表示做多持有, 2 表示做空持有
  const dp = Array(n).fill(0).map(() =>
    Array(k + 1).fill(0).map(() => [-Infinity, -Infinity, -Infinity])
  )


  // 初始化第0天
  dp[0][0][0] = 0;
  dp[0][0][1] = -Infinity;
  dp[0][0][2] = -Infinity;

  for (let j = 1; j <= k; j++) {
    dp[0][j][0] = -Infinity; // 第0天无法完成j笔交易并空仓
    dp[0][j][1] = -prices[0]; // 第0天买入做多
    dp[0][j][2] = prices[0]; // 第0天卖出做空
  }

  // 状态转移
  for (let i = 1; i < n; i++) {
    dp[i][0][0] = 0;
    for (let j = 1; j <= k; j++) {
      // 空仓状态
      dp[i][j][0] = Math.max(
        dp[i - 1][j][0], // 继续空仓
        dp[i - 1][j][1] + prices[i], //前一天买了，今天卖
        dp[i - 1][j][2] - prices[i] // 前一天做空课，今天买
      )

      // 做多持有 action
      dp[i][j][1] = Math.max(
        dp[i - 1][j][1], // 继续做多持有
        dp[i - 1][j - 1][0] - prices[i] // 前一天空仓， 今天买
      )

      // 做空持有 action
      dp[i][j][2] = Math.max(
        dp[i - 1][j][2], // 继续做空持有
        dp[i - 1][j - 1][0] + prices[i] // 前一天空仓，今天卖
      )

    }
  }


  let maxProfit = 0;
  for (let j = 0; j <= k; j++) {
    maxProfit = Math.max(maxProfit, dp[n - 1][j][0]) //只需要关心最后一天空仓状态的最大利润
  }

  return maxProfit;
};

// maximumProfit([1, 7, 9, 8, 2], 2)
console.log(maximumProfit([1, 7, 9, 8, 2], 2))