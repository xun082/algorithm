/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  /**
   * @author xun
   * @method 递归
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  // if (p.val < root.val && q.val < root.val) {
  //   return lowestCommonAncestor(root.left, p, q);
  // } else if (p.val > root.val && q.val > root.val) {
  //   return lowestCommonAncestor(root.right, p, q);
  // } else {
  //   return root;
  // }
  /**
   * @author xun
   * @method 迭代
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let ancestor = root;
  while (true) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else {
      ancestor = root;
      break;
    }
  }
  return ancestor;
};
// @lc code=end
