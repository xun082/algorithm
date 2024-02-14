/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
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
    const current = [];

    while (n > 0) {
      const node = stack.shift();
      current.push(node.val);

      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
      n--;
    }

    result.push(current);
  }

  return result;
};
// @lc code=end
