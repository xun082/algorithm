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
  /**
   * @author xun
   * @method 一次遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const length = gas.length;

  let i = 0;
  while (i < length) {
    let subGas = 0;
    let subCost = 0;
    let current = 0;
    while (current < length) {
      const j = (i + current) % length;
      subGas += gas[j];
      subCost += cost[j];

      if (subCost > subGas) break;
      current++;
    }

    if (current === length) return i;
    else i = i + current + 1;
  }

  return -1;
};

// @lc code=end
