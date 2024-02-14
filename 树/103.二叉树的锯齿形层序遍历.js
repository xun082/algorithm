/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  /**
   * @author xun
   * @method 广度优先遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const result = [];
  const stack = [root];
  let isOrderLeft = true;

  if (!root) return result;

  while (stack.length) {
    let n = stack.length;
    const current = [];

    while (n > 0) {
      const node = stack.shift();

      if (isOrderLeft) current.push(node.val);
      else current.unshift(node.val);

      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
      n--;
    }

    result.push(current);
    isOrderLeft = !isOrderLeft;
  }

  return result;
};
// @lc code=end
