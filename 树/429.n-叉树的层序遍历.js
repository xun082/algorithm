/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
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
    const level = [];

    for (let i = 0; i < n; i++) {
      const node = stack.shift();
      level.push(node.val);

      for (const child of node.children) {
        stack.push(child);
      }
    }
    result.push(level);
  }

  return result;
};
// @lc code=end
