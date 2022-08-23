/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function (root) {
  const result = [];

  if (root === null) return result;

  const queue = [root];

  while (queue.length) {
    let length = queue.length;

    let maxVal = queue[0].val;
    while (length--) {
      const node = queue.shift();

      maxVal = maxVal > node.val ? maxVal : node.val;

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(maxVal);
  }

  return result;
};
// @lc code=end
