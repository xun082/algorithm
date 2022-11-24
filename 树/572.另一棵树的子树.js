/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  /**
   * @author xun
   * @method 深度优先遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  function isSameTree(p, q) {
    if (!p && !q) return true;
    if (
      p &&
      q &&
      q.val === p.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(q.right, p.right)
    ) {
      return true;
    }
    return false;
  }
  if (root === null) return false;

  if (isSameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
// @lc code=end
