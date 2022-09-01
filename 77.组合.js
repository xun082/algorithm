/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  const path = [];

  backtrack(n, k, 1);

  return result;

  function backtrack(n, k, i) {
    const length = path.length;

    if (length === k) {
      result.push([...path]);
      return;
    }
    for (let j = i; j <= n - k + length + 1; j++) {
      path.push(j);
      backtrack(n, k, j + 1);
      path.pop();
    }
  }
};
// @lc code=end
