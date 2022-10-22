/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (s.length === 0) return 0;

  // 创建一个同纬度带的数组,用于判断那些下标组合是有效的括号
  const fillArr = new Array(s.length).fill(0);

  // 辅助栈
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      if (stack.length > 0) {
        fillArr[i] = 1;
        fillArr[stack.pop()] = 1;
      }
    }
  }

  // 计算最长连续的1
  let count = 0;
  let max = 0;

  for (const v of fillArr) {
    if (v === 1) {
      count++;
      max = Math.max(count, max);
    } else {
      count = 0;
    }
  }

  return max;
};

// @lc code=end
