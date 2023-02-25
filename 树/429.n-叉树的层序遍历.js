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

  if (!root) return [];

  const ans = [];
  const queue = [root];

  while (queue.length) {
    const count = queue.length;
    const level = [];

    for (let i = 0; i < count; i++) {
      const current = queue.shift();
      level.push(current.val);

      for (const child of current.children) {
        queue.push(child);
      }
    }
    ans.push(level);
  }

  return ans;
};
// @lc code=end
