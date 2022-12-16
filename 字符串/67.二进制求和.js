/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  /**
   * @author xun
   * @method 字符串
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let max = Math.max(a.length, b.length);

  let flag = 0;
  let result = "";
  let current = 0;
  let i = 0;

  while (i < max) {
    current = +(a[a.length - i - 1] || 0) + +(b[b.length - i - 1] || 0) + flag;
    flag = current / 2 >= 1 ? 1 : 0;
    result = (current % 2) + result;
    i++;
  }
  return flag ? 1 + result : result;
};
// @lc code=end
