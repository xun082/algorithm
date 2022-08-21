/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let first = 0;
  let last = s.length - 1;

  while (first < last) {
    [s[first++], s[last--]] = [s[last], s[first]];
  }
};
// @lc code=end
