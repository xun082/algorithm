/*
 * @lc app=leetcode.cn id=1008 lang=javascript
 *
 * [1008] 前序遍历构造二叉搜索树
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
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  /**
   * @author xun
   * @method 深度遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  if (!preorder.length) return null;

  const value = preorder.shift();

  let root = new TreeNode(value);

  root.left = bstFromPreorder(preorder.filter((item) => item < value));
  root.right = bstFromPreorder(preorder.filter((item) => item > value));

  return root;
};
// @lc code=end
