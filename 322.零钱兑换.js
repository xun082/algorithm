/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;

  const path = new Array(amount + 1).fill(Infinity);
  path[0] = 0;

  for (let i = 1; i <= amount; i++) {
    debugger;
    for (const number of coins) {
      if (i >= number) {
        path[i] = Math.min(path[i], path[i - number] + 1);
      }
    }
  }
  return path[amount] === Infinity ? -1 : path[amount];
};

// @lc code=end
