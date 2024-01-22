/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const stack = [];
  const arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    const item = s[i];
    if (item === "(") {
      stack.push(i);
    } else if (item === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        arr[i] = "";
      }
    }
  }

  for (const item of stack) {
    arr[item] = "";
  }

  return arr.join("");
};

// @lc code=end
