/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let set = new Set();

  let sum = 0;
  while (n !== 1) {
    if (set.has(n)) {
      // 已经有n了就说明开始无限循环了
      return false;
    } else {
      set.add(n);
      sum = 0;
      while (n > 0) {
        // 每个位置上的平方和
        sum += Math.pow(n % 10, 2);
        n = Math.floor(n / 10);
      }
      n = sum;
    }
  }

  return n === 1;
};
// @lc code=end
