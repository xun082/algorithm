/*
 * @lc app=leetcode.cn id=1110 lang=javascript
 *
 * [1110] 删点成林
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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  /**
   * @author xun
   * @method 深度优先搜索
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const toDeleteSet = new Set(to_delete);
  const roots = [];

  dfs(root, true, toDeleteSet, roots);

  return roots;

  function dfs(node, isRoot, toDeleteSet, roots) {
    if (!node) return null;

    const deleted = toDeleteSet.has(node.val);
    node.left = dfs(node.left, deleted, toDeleteSet, roots);
    node.right = dfs(node.right, deleted, toDeleteSet, roots);

    if (deleted) return null;
    else if (isRoot) roots.push(node);

    return node;
  }
};
// @lc code=end
