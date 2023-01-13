/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  /**
   * @author xun
   * @method 哈希表
   * @timeComplexity O(N)
   * @spaceComplexity O(∣Σ∣)
   */
  const s2t = [];
  const t2s = [];

  const length = s.length;

  for (let i = 0; i < length; i++) {
    const x = s[i];
    const y = t[i];

    if ((s2t[x] && s2t[x] !== y) || (t2s[y] && t2s[y] !== x)) return false;

    s2t[x] = y;
    t2s[y] = x;
  }

  return true;
};
// @lc code=end
