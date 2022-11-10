/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  /**
   * @author xun
   * @method 递归
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  // const check = (p, q) => {
  //   if (!p && !q) return true;
  //   if (!p || !q) return false;
  //   return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
  // };
  // return check(root, root);
  /**
   * @author xun
   * @method 迭代
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
};
// @lc code=end
