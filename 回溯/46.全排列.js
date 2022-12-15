/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  /**
   * @author xun
   * @method 回溯
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const result = [];
  function dfs(index, array) {
    if (array.length === nums.length) {
      result.push([...array]);
      return;
    }
    for (let j = 0; j < nums.length; j++) {
      if (array.indexOf(nums[j]) === -1) {
        dfs(index + 1, [...array, nums[j]]);
      }
    }
  }

  dfs(0, []);
  return result;
};
// @lc code=end
