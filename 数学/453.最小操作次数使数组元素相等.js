/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小操作次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  /**
   * @author xun
   * @method 数学
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const min = Math.min(...nums);

  let result = 0;
  for (const num of nums) {
    result += num - min; // 每个数减最小
  }
  return result;
};
// @lc code=end
