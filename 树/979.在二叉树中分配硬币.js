/*
 * @lc app=leetcode.cn id=979 lang=javascript
 *
 * [979] 在二叉树中分配硬币
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
var distributeCoins = function (root) {
  /**
   * @author xun
   * @method 深度优先遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  let result = 0;

  function dfs(node) {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    result += Math.abs(left) + Math.abs(right);
    return node.val + left + right - 1;
  }

  dfs(root);

  return result;
};
// @lc code=end
