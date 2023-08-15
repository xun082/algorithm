/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  /**
   * @author xun
   * @method 递归遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const result = [];
  const stack = [root];
  if (!root) return result;

  while (stack.length) {
    const node = stack.pop();

    result.unshift(node.val);
    node.left && stack.push(node.left);

    node.right && stack.push(node.right);
  }
  return result;
};
// @lc code=end
