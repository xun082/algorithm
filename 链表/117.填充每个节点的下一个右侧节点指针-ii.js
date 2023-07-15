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
  if (!root) return root;

  let queue = [root];
  let nextQueue = [];

  while (queue.length > 0) {
    const node = queue.shift();

    node.left && nextQueue.push(node.left);
    node.right && nextQueue.push(node.right);

    if (queue.length > 0) node.next = queue[0];
    else {
      node.next = null;
      queue = nextQueue;
      nextQueue = [];
    }
  }
  return root;
};

// @lc code=end
