/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  /**
   * @author xun
   * @method 哈希表
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const set = new Set();

  for (const number of nums) {
    if (set.has(number)) return true;
    else set.add(number);
  }
  return false;
};
// @lc code=end
