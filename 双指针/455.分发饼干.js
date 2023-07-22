/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  /**
   * @author xun
   * @method 双指针
   * @timeComplexity O(m log m+n log n)
   * @spaceComplexity O(m log m+n log n)
   */
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  const n = s.length;
  let count = 0;
  let index = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] >= g[index]) {
      count++;
      index++;
    }
  }

  return count;
};
// @lc code=end
