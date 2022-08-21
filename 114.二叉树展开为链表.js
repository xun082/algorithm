/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
var flatten = function (root) {
  let current = root;
  while (current !== null) {
    if (current.left !== null) {
      // 2
      const next = current.left;
      // 2
      let predecessor = next;

      while (predecessor.right !== null) {
        //   4
        predecessor = predecessor.right;
      }

      predecessor.right = current.right;
      current.left = null;
      current.right = next;
    }
    current = current.right;
  }
};
// @lc code=end
