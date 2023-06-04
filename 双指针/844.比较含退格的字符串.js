/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let i = s.length - 1;
  let j = t.length - 1;
  let backSpaceS = 0;
  let backSpaceT = 0;

  while (i >= 0 || j >= 0) {
    // s 循环
    while (i >= 0) {
      if (s[i] === "#") {
        backSpaceS++;
        i--;
      } else if (backSpaceS > 0) {
        backSpaceS--;
        i--;
      } else break;
    }

    // t 循环
    while (j >= 0) {
      if (t[j] === "#") {
        backSpaceT++;
        j--;
      } else if (backSpaceT > 0) {
        backSpaceT--;
        j--;
      } else break;
    }
    if (s[i] !== t[j]) return false;
    i--;
    j--;
  }
  return true;
};
// @lc code=end
