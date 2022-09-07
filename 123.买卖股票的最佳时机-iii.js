/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 只能两次买卖
  // dp[i][1] 第i天,你买入股票的状态

  /**
   * 五个状态
   */
  const length = prices.length;
  const dp = new Array(length).fill(0).map((x) => new Array(5).fill(0));

  dp[0][1] = -prices[0];
  dp[0][3] = -prices[0];

  for (let index = 1; index < prices.length; index++) {
    dp[index][0] = dp[index - 1][0];
    dp[index][1] = Math.max(dp[index - 1][1], dp[index - 1][0] - prices[index]);
    dp[index][2] = Math.max(dp[index - 1][2], dp[index - 1][1] + prices[index]);
    dp[index][3] = Math.max(dp[index - 1][3], dp[index - 1][2] - prices[index]);
    dp[index][4] = Math.max(dp[index - 1][4], dp[index - 1][3] + prices[index]);
  }

  return dp[prices.length - 1][4];
};
// @lc code=end
