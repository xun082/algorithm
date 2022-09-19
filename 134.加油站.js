/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0;
  let totalCost = 0;

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
  }

  // 如果花费的油大于加油站的油
  if (totalCost > totalGas) return -1;

  let currentGas = 0;
  let start = 0;
  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];

    currentGas = currentGas - cost[i] + gas[i];
    if (currentGas < 0) {
      currentGas = 0;
      // 当前在 i 不能走完,当i等于0时更不可能走完 所以需要i+1
      start = i + 1;
    }
  }

  return start;
};
// @lc code=end
