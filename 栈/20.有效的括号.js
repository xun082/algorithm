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
  /**
   * @author xun
   * @method 栈
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (map[item]) {
      stack.push(item);
    } else {
      // 反括号的情况
      if (item !== map[stack.pop()]) {
        return false;
      }
    }
  }
  // 栈为空则返回true
  return !stack.length;
};
// @lc code=end
