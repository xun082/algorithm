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
  /**
   * @author xun
   * @method 贪心
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const length = prices.length;
  let result = 0;
  for (let i = 1; i < length; i++) {
    result += Math.max(0, prices[i] - prices[i - 1]);
  }

  return result;
};
// @lc code=end
