/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  /**
   * @author xun
   * @method 搜索回溯
   * @timeComplexity O(S)
   * @spaceComplexity O(target)
   */
  const result = [];
  function dfs(target, combine, index) {
    if (index === candidates.length) return;

    if (target === 0) {
      result.push(combine);
      // 跳出当前的函数栈
      return;
    }

    dfs(target, combine, index + 1);

    if (target - candidates[index] >= 0)
      dfs(target - candidates[index], [...combine, candidates[index]], index);
  }
  dfs(target, [], 0);

  return result;
};
// @lc code=end
