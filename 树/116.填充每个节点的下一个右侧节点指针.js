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
  if (root === null) return root;

  // 从根节点开始
  let leftmost = root;

  while (leftmost.left !== null) {
    // 遍历这一层节点组织成的链表,为下一层的节点更新next 指针
    let head = leftmost;

    while (head !== null) {
      head.left.next = head.right;

      if (head.next !== null) {
        head.right.next = head.next.left;
      }

      head = head.next;
    }
    // 去下一层的最左节点
    leftmost = leftmost.left;
  }
  return root;
};
// @lc code=end
