/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const table = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    table[s.codePointAt(i) - "a".codePointAt(0)]++;
  }

  for (let i = 0; i < t.length; i++) {
    table[t.codePointAt(i) - "a".codePointAt(0)]--;
    if (table[t.codePointAt(i) - "a".codePointAt(0)] < 0) return false;
  }

  return true;
};
// @lc code=end
