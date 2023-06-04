/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  /**
   * @author xun
   * @method 迭代
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  let current = root;
  let currentParent = null;

  while (current && current.val !== key) {
    currentParent = current;
    if (current.val > key) current = current.left;
    else current = current.right;
  }

  if (!current) return root;

  if (!current.left && !current.right) current = null;
  else if (!current.left) current = current.right;
  else if (!current.right) current = current.left;
  else {
    let successor = current.right;
    let successParent = current;

    while (successor.left) {
      successParent = successor;
      successor = successor.left;
    }

    if (successParent.val === current.val)
      successParent.right = successor.right;
    else successParent.left = successor.right;

    successor.right = current.right;
    successor.left = current.left;

    current = successor;
  }

  if (!currentParent) return current;
  else {
    if (currentParent.left && currentParent.left.val === key) {
      currentParent.left = current;
    } else {
      currentParent.right = current;
    }
    return root;
  }
};
// @lc code=end
