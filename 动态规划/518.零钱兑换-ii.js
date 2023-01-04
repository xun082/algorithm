/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(amount * N)
   * @spaceComplexity O(amount)
   */
  const path = new Array(amount + 1).fill(0);
  path[0] = 1;
  
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      path[j] += path[j - coins[i]];
    }
  }

  return path[amount];
};
// @lc code=end
