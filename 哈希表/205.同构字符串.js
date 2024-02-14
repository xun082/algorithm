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
  const s2t = new Map();
  const t2s = new Map();
  const length = s.length;

  for (let i = 0; i < length; i++) {
    const x = s[i];
    const y = t[i];

    // 合并判断条件，检查s到t和t到s的映射是否一致
    if ((s2t.has(x) && s2t.get(x) !== y) || (t2s.has(y) && t2s.get(y) !== x)) {
      return false;
    }

    s2t.set(x, y);
    t2s.set(y, x);
  }

  return true;
};
// @lc code=end
