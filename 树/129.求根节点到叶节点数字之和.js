/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
 * @return {number}
 */
var sumNumbers = function (root) {
  /**
   * @author xun
   * @method 深度优先遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  // function dfs(root, previousSum) {
  //   if (root === null) return 0;
  //   const sum = previousSum * 10 + root.val;
  //   if (root.left === null && root.right === null) {
  //     return sum;
  //   } else {
  //     return dfs(root.left, sum) + dfs(root.right, sum);
  //   }
  // }
  // return dfs(root, 0);
  /**
   * @author xun
   * @method 广度优先遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  if (root === null) return 0;

  let sum = 0;
  const nodeQueue = [root];
  const numQueue = [root.val];

  while (nodeQueue.length) {
    const node = nodeQueue.shift();

    const num = numQueue.shift();
    const left = node.left;
    const right = node.right;

    if (left === null && right === null) {
      sum += num;
    } else {
      if (left !== null) {
        nodeQueue.push(left);
        numQueue.push(num * 10 + left.val);
      }
      if (right !== null) {
        nodeQueue.push(right);
        numQueue.push(num * 10 + right.val);
      }
    }
  }

  return sum;
};
// @lc code=end
