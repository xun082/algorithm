/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 贪心
  //   let result = 0;
  //   for (let i = 0; i < prices.length; i++) {
  //     if (prices[i] - prices[i - 1] > 0) {
  //       result += prices[i] - prices[i - 1];
  //     }
  //   }
  //   return result;
  // 动态规划
  // 时间复杂度较好
  let has = -prices[0];
  let notHas = 0;

  for (let i = 1; i < prices.length; i++) {
    has = Math.max(has, notHas - prices[i]);
    notHas = Math.max(notHas, has + prices[i]);
  }

  return notHas;
};
// @lc code=end
