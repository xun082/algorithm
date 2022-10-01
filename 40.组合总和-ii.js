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
  candidates.sort((a, b) => a - b);

  const length = candidates.length;

  const result = [];

  const dfs = function (sum, start, temp) {
    //   边界判断
    if (sum === target) {
      result.push(temp.slice());
    }
    if (sum > target) {
      return;
    }

    for (let i = start; i < length; i++) {
      // 如果临近的重复跳过循环
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      temp.push(candidates[i]);

      dfs(sum + candidates[i], i + 1, temp);
      temp.pop();
    }
  };

  dfs(0, 0, []);

  return result;
};
// @lc code=end
