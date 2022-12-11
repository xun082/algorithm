/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  /**
   * @author xun
   * @method 回溯
   * @timeComplexity O(2n × n)
   * @spaceComplexity O(N)
   */
  candidates.sort((a, b) => a - b);

  const result = [];

  function dfs(candidates, combine, target) {
    for (let i = 0; i < candidates.length; i++) {
      let currentPath = [...combine, candidates[i]];
      let currentTarget = target - candidates[i];

      // 相同的情况跳过
      if (i > 0 && candidates[i - 1] === candidates[i]) continue;

      if (currentTarget === 0) result.push(currentPath);
      if (currentTarget >= candidates[i])
        dfs(candidates.slice(i + 1), currentPath, currentTarget);
    }
  }

  dfs(candidates, [], target);
  return result;
};
// @lc code=end
