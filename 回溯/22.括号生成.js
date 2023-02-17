/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  /**
   * @author xun
   * @method 回溯
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  if (n === 0) return [];

  const result = [];

  function dfs(left, right, str) {
    if (str.length === 2 * n) {
      result.push(str);
      return;
    }

    // 选择左括号,只要 ( 有剩余就选择
    if (left > 0) dfs(left - 1, right, str + "(");

    // 选择又括号,只有右括号的数量大于左括号才能炫
    if (left < right) dfs(left, right - 1, str + ")");
  }

  dfs(n, n, "");
  return result;
};
// @lc code=end
