/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(n min(n,k))
   * @spaceComplexity O(n min(n,k))
   */
  const n = prices.length;
  if (!n) return 0;

  k = Math.min(k, Math.floor(n / 2));
  const buy = new Array(k + 1).fill(0);
  const sell = new Array(k + 1).fill(0);

  [buy[0], sell[0]] = [-prices[0], 0];

  for (let i = 1; i < k + 1; i++) {
    buy[i] = sell[i] = -Number.MAX_VALUE;
  }

  for (let i = 1; i < n; i++) {
    buy[0] = Math.max(buy[0], sell[0] - prices[i]);
    for (let j = 1; j < k + 1; j++) {
      buy[j] = Math.max(buy[j], sell[j] - prices[i]);
      sell[j] = Math.max(sell[j], buy[j - 1] + prices[i]);
    }
  }

  return Math.max(...sell);
};
// @lc code=end
