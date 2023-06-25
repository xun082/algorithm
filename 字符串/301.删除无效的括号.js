/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  /**
   * @author xun
   * @method 剪枝
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const n = s.length;
  let count = 0;
  let i = 0;

  const set = new Set();

  for (const c of s) {
    if (c === "(") i++;
    else if (c === ")" && i > 0) {
      i--;
      count++;
    }
  }

  function dfs(i, left, right, str) {
    if (left < right || left > count || right > count) return;

    if (i === n) {
      if (left === count && right === count) set.add(str);
      return;
    }

    const current = s[i];
    if (current === "(") {
      dfs(i + 1, left + 1, right, str + "(");
      dfs(i + 1, left, right , str);
    } else if (current === ")") {
      dfs(i + 1, left, right + 1, str + ")");
      dfs(i + 1, left, right, str);
    } else {
      dfs(i + 1, left, right, str + current);
    }
  }
  dfs(0, 0, 0, "");
  return [...set];
};
// @lc code=end
