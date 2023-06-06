/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  /**
   * @author xun
   * @method 前缀和
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const prefix = new Map();

  prefix.set(0, 1);
  return dfs(root, prefix, 0, targetSum);

  function dfs(root, prefix, current, targetSum) {
    if (!root) return 0;

    let result = 0;
    current += root.val;

    result = prefix.get(current - targetSum) || 0;
    prefix.set(current, (prefix.get(current) || 0) + 1);

    result += dfs(root.left, prefix, current, targetSum);
    result += dfs(root.right, prefix, current, targetSum);

    prefix.set(current, (prefix.get(current) || 0) - 1);

    return result;
  }
};
// @lc code=end
