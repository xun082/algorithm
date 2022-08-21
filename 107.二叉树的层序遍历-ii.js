/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const result = []; //结果
  const queue = [root]; //遍历中用的队列

  if (root === null) {
    return result;
  }

  //当队列中还有值
  while (queue.length) {
    let length = queue.length;
    const currentLevel = [];

    while (length > 0) {
      const node = queue.shift();
      currentLevel.push(node.val);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);

      length--;
    }

    result.unshift(currentLevel);
  }
  return result;
};
// @lc code=end
