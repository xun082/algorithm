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

  function dfs(root) {
    if (root === null) return [];

    dfs(root.left);
    dfs(root.right);
    result.push(root.val);
  }
  dfs(root);

  return result;
};
// @lc code=end
