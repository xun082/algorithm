/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
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
  if (root === null) return root;

  const queue = [root];

  while (queue.length) {
    let length = queue.length;
    while (length--) {
      const node = queue.shift();

      if (length > 0) node.next = queue[0];

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return root;
};
// @lc code=end
