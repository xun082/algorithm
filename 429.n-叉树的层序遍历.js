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
  const result = [];
  if (root === null) return result;

  const queue = [root];

  while (queue.length) {
    const length = queue.length;
    const currentLevel = [];

    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);
      node.children.forEach((child) => {
        child && queue.push(child);
      });
    }
    result.push(currentLevel);
  }

  return result;
};
// @lc code=end
