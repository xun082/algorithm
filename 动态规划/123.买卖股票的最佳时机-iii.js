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
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const length = prices.length;

  let one = -prices[0];
  let two = -prices[0];

  let count1 = 0;
  let count2 = 0;

  for (let i = 1; i < length; i++) {
    one = Math.max(one, -prices[i]);
    count1 = Math.max(count1, one + prices[i]);

    two = Math.max(two, count1 - prices[i]);
    count2 = Math.max(count2, two + prices[i]);
  }

  return count2;
};
// @lc code=end
