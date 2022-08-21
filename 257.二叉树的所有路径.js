/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = [];

  const traverse = (node, path) => {
    if (node === null) {
      return null;
    }

    if (node.left === null && node.right === null) {
      result.push(path + node.val);
    }
    traverse(node.left, path + node.val + "->");
    traverse(node.right, path + node.val + "->");
  };
  traverse(root, "");

  return result;
};
// @lc code=end
