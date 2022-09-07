/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 贪心
  //   let low = Infinity;
  //   let result = 0;
  //   for (let i = 0; i < prices.length; i++) {
  //     low = Math.min(low, prices[i]);
  //     result = Math.max(result, prices[i] - low);
  //   }
  //   return result;

  // 动态规划
  const dp = new Array(prices.length).fill([0, 0]);
  // 初始值 第一个值为持有股票 第二个是不持有股票或者已经卖出
  dp[0] = [-prices[0], 0];

  for (let i = 1; i < prices.length; i++) {
    dp[i] = [
      Math.max(dp[i - 1][0], -prices[i]),
      Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]),
    ];
  }

  return dp[prices.length - 1][1];
};
// @lc code=end
