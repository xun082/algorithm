/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  /**
   * @author xun
   * @method 搜索回溯
   * @timeComplexity O(N*N!)
   * @spaceComplexity O(N)
   */
  const result = [];
  const vis = new Array(nums.length).fill(false);

  function backtrack(index, perm) {
    if (index === nums.length) {
      result.push(perm.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) continue;
      perm.push(nums[i]);

      vis[i] = true;
      backtrack(index + 1, perm);
      vis[i] = false;

      perm.pop();
    }
  }
  nums.sort((a, b) => a - b);
  backtrack(0, []);

  return result;
};
// @lc code=end
