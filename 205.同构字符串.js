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
  const length = s.length;

  let s2t = [];
  const t2s = [];

  // 构造s和t的相互映射关系
  for (let i = 0; i < length; i++) {
    let x = s[i];
    let y = t[i];

    if (!s2t[x]) s2t[x] = y;
    else if (s2t[x] !== y) return false;
    if (!t2s[y]) t2s[y] = x;
    else if (t2s[y] !== x) return false;
  }

  return true;
};
// @lc code=end
