/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0;

  function traverse(node) {
    if (node === null) return;

    // left是单节点
    const left = node.left;
    if (left && !left.left && !left.right) {
      sum += left.val;
    }

    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);

  return sum;
};
// @lc code=end
