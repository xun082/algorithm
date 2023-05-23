/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  /**
   * @author xun
   * @method 搜索子字符串
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  return s.length === goal.length && (s + s).indexOf(goal) !== -1;
};
// @lc code=end
