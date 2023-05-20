/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  /**
   * @author xun
   * @method 栈
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const n = preorder.length;
  let index = 0;
  const stack = [1];

  while (index < n) {
    if (!stack.length) return false;

    if (preorder[index] === ",") {
      index++;
    } else if (preorder[index] === "#") {
      stack[stack.length - 1]--;
      if (stack[stack.length - 1] === 0) stack.pop();
      index++;
    } else {
      while (index < n && preorder[index] !== ",") {
        index++;
      }
      stack[stack.length - 1]--;
      if (stack[stack.length - 1] === 0) {
        stack.pop();
      }
      stack.push(2);
    }
  }

  return stack.length === 0;
};
// @lc code=end
