/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  /**
   * @author xun
   * @method 栈
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const names = path.split("/");
  const stack = [];

  for (const name of names) {
    if (name === "..") {
      if (stack.length) stack.pop();
    } else if (name && name !== ".") {
      stack.push(name);
    }
  }

  return stack.join("/");
};
// @lc code=end
