/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  /**
   * @author xun
   * @method 使用已建立的next指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  if (!root) return root;

  const queue = [root];

  while (queue.length) {
    const n = queue.length;
    let i = 0;
    while (i < n) {
      const node = queue.shift();

      if (i < n - 1) node.next = queue[0];

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);

      i++;
    }
  }
  return root;
};
// @lc code=end
