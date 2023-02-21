/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  /**
   * @author xun
   * @method 递归
   * @timeComplexity O(n× 2**n)
   * @spaceComplexity O(n× 2**n)
   */
  nums.sort((a, b) => a - b);

  let temp = [];
  const ans = [];

  function dfs(choosePre, current, nums) {
    if (current === nums.length) {
      ans.push(temp.slice());
      return;
    }

    dfs(false, current + 1, nums);
    if (!choosePre && current > 0 && nums[current - 1] === nums[current]) {
      return;
    }

    temp.push(nums[current]);

    dfs(true, current + 1, nums);

    temp = temp.slice(0, temp.length - 1);
  }
  dfs(false, 0, nums);

  return ans;
};
// @lc code=end
