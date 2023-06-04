/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
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
var longestUnivaluePath = function (root) {
  /**
   * @author xun
   * @method 深度优先遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  let res = 0;

  function dfs(root) {
    if (!root) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);
    let left1 = 0;
    let right1 = 0;

    if (root.left && root.left.val === root.val) left1 = left + 1;
    if (root.right && root.right.val === root.val) right1 = right + 1;

    res = Math.max(res, left1 + right1);
    return Math.max(left1, right1);
  }
  dfs(root);

  return res;
};
// @lc code=end
