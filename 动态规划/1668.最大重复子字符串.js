/*
 * @lc app=leetcode.cn id=1668 lang=javascript
 *
 * [1668] 最大重复子字符串
 */

// @lc code=start
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(MN)
   * @spaceComplexity O(N)
   */
  const n = sequence.length;
  const m = word.length;
  if (n < m) return 0;

  const path = new Array(n).fill(0);
  for (let i = m - 1; i < n; i++) {
    let valid = true;
    for (let j = 0; j < m; j++) {
      if (sequence[i - m + j + 1] !== word[j]) {
        valid = false;
        break;
      }
    }
    if (valid) path[i] = (i === m - 1 ? 0 : path[i - m]) + 1;
  }

  return Math.max(...path);
};
// @lc code=end
