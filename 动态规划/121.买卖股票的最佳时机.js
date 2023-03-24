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
  /**
   * @author xun
   * @method 一次遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let min = prices[0];
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    max = Math.max(max, prices[i] - min);
    min = Math.min(prices[i], min);
  }

  return max;
};
// @lc code=end
