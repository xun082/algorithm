/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function (root) {
  /**
   * @author xun
   * @method 广度优先遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  if (!root) return [];

  const result = [];
  const nodeQueue = [root];

  let isOrderLeft = true;

  while (nodeQueue.length) {
    let levelList = [];

    const size = nodeQueue.length;
    for (let i = 0; i < size; i++) {
      const node = nodeQueue.shift();
      if (isOrderLeft) {
        // 向后面插入
        levelList.push(node.val);
      } else {
        // 向前面插入
        levelList.unshift(node.val);
      }

      if (node.left !== null) {
        nodeQueue.push(node.left);
      }
      if (node.right !== null) {
        nodeQueue.push(node.right);
      }
    }

    result.push(levelList);
    isOrderLeft = !isOrderLeft;
  }
  return result;
};
// @lc code=end
