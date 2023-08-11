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
  /**
   * @author xun
   * @method 栈
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  let ans = 0;
  const stack = [-1];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(i);
    else {
      stack.pop();

      if (stack.length === 0) stack.push(i);
      else ans = Math.max(ans, i - stack[stack.length - 1]);
    }
  }

  return ans;
};
// @lc code=end
