/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  if (root === null || (root.left === null && root.right === null)) return 0;

  let result = 0;

  function dfs(root) {
    if (root === null) return 0;
    let left = dfs(root.left);
    let right = dfs(root.right);

    result = Math.max(result, left + right);

    return Math.max(left, right) + 1;
  }
  dfs(root);
  return result;
};
// @lc code=end
