/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function (root) {
  // const result = [];
  // if (root === null) return result;
  // let queue = [root];
  // while (queue.length) {
  //   const length = queue.length;
  //   let sum = 0;
  //   for (let i = 0; i < length; i++) {
  //     const node = queue.shift();
  //     sum += node.val;
  //     node.left && queue.push(node.left);
  //     node.right && queue.push(node.right);
  //   }
  //   result.push(sum / length);
  // }
  // return result;
  /**
   * @author xun
   * @method 广度优先遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const result = [];
  const stack = [root];

  if (!root) return result;

  while (stack.length) {
    const n = stack.length;

    let sum = 0;

    for (let i = 0; i < n; i++) {
      const node = stack.shift();

      sum += node.val;

      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
    result.push(sum / n);
  }
  return result;
};
// @lc code=end
