/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第 N 位数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let d = 1,
    count = 9;
  while (n > d * count) {
    n -= d * count;
    d++;
    count *= 10;
  }
  const index = n - 1;
  const start = Math.floor(Math.pow(10, d - 1));
  const num = start + Math.floor(index / d);
  const digitIndex = index % d;
  const digit =
    Math.floor(num / Math.floor(Math.pow(10, d - digitIndex - 1))) % 10;
  return digit;
};
// @lc code=end
