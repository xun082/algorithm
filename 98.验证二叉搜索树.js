/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let previous = -Infinity;

  function traverse(node) {
    if (node === null) return true;

    const left = traverse(node.left);
    if (previous >= node.val) {
      //   破坏了递增的逻辑
      return false;
    }

    previous = node.val;
    const right = traverse(node.right);
    return left && right;
  }

  return traverse(root);
};
// @lc code=end
