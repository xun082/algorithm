/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const item of s) {
    if (map[item]) {
      stack.push(item);
    } else {
      if (item !== map[stack.pop()]) return false;
    }
  }

  return !stack.length;
};

// @lc code=end
