/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  /**
   * @author xun
   * @method 位运算
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */

  let result = 0;

  nums.forEach((num) => {
    result ^= num;
  });

  return result;
};
// @lc code=end
