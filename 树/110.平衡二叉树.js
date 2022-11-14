/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
  const res = {
    isBalancedTree: true,
  };
  dfs(root, res);
  return res.isBalancedTree;
};

/**
 * 求树的深度
 */
var maxDepth = function (root) {
  if (root == null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

/**
 * 深度遍历
 */
var dfs = function (root, res) {
  if (root == null) return;
  if (Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) {
    return (res.isBalancedTree = false);
  }
  dfs(root.left, res);
  dfs(root.right, res);
};

// @lc code=end
