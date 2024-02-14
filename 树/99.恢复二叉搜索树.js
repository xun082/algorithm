/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  /**
   * @author xun
   * @method 隐式中序遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(H)
   */
  const stack = [];

  let x = null;
  let y = null;
  let pred = null;

  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();

    if (pred !== null && root.val < pred.val) {
      y = root;
      if (x === null) x = pred;
      else break;
    }
    pred = root;
    root = root.right;
  }
  [x.val, y.val] = [y.val, x.val];
};

// @lc code=end
