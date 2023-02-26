/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  /**
   * @author xun
   * @method 模拟
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  if (root === null) return new TreeNode(val);

  let pos = root;

  while (pos !== null) {
    if (val < pos.val) {
      if (pos.left === null) {
        pos.left = new TreeNode(val);
        break;
      } else {
        pos = pos.left;
      }
    } else {
      if (pos.right === null) {
        pos.right = new TreeNode(val);
        break;
      } else {
        pos = pos.right;
      }
    }
  }

  return root;
};
// @lc code=end
