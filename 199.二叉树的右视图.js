/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  // 每一层最右边的一个值
  let result = [];
  let queue = [root];

  if (root === null) {
    return result;
  }

  while (queue.length) {
    let length = queue.length;
    while (length--) {
      let node = queue.shift();

      if (length === 0) {
        result.push(node.val);
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return result;
};
// @lc code=end
