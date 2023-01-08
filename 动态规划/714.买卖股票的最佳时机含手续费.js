/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  /**
   * @author xun
   * @method 贪心
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  // let result = 0;
  // let minPrice = prices[0];
  // for (let i = 0; i < prices.length; i++) {
  //   if (prices[i] < minPrice) minPrice = prices[i];
  //   if (prices[i] >= minPrice && prices[i] <= minPrice + fee) continue;
  //   // 赚的
  //   if (prices[i] > minPrice + fee) {
  //     result += prices[i] - minPrice - fee;
  //     minPrice = prices[i] - fee;
  //   }
  // }
  // return result;
  //
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const length = prices.length;
  let has = -prices[0] - fee;
  let notHas = 0;

  for (let i = 1; i < length; i++) {
    has = Math.max(has, notHas - prices[i] - fee);
    notHas = Math.max(notHas, has + prices[i]);
  }

  return notHas;
};
// @lc code=end
