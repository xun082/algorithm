/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let x0 = num;
  while (true) {
    const x1 = Math.floor((x0 + num / x0) / 2);
    if (x0 - x1 < 1e-6) {
      break;
    }
    x0 = x1;
  }
  const x = x0;

  return x * x === num;
};
// @lc code=end
