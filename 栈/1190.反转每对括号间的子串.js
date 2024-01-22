/*
 * @lc app=leetcode.cn id=1190 lang=javascript
 *
 * [1190] 反转每对括号间的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  /**
   * @author xun
   * @method
   * @timeComplexity O(N * N)
   * @spaceComplexity O(N)
   */
  const stack = [];
  let str = "";

  for (const char of s) {
    if (char === "(") {
      stack.push(str);
      str = "";
    } else if (char === ")") {
      str = str.split("").reverse().join("");
      str = stack[stack.length - 1] + str;
      stack.pop();
    } else {
      str += char;
    }
  }

  return str;
};
// @lc code=end
