/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  /**
   * @author xun
   * @method 广度优先
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const result = [];
  const stack = [root];

  if (!root) return result;

  while (stack.length) {
    let n = stack.length;

    while (n--) {
      const node = stack.shift();

      if (n === 0) result.push(node.val);

      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
  }
  return result;
};
// @lc code=end
