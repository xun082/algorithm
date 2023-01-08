/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const length = cost.length;

  let previous = 0;
  let current = 0;
  for (let i = 2; i <= length; i++) {
    let next = Math.min(current + cost[i - 1], previous + cost[i - 2]);
    previous = current;
    current = next;
  }
  return current;
};
// @lc code=end
