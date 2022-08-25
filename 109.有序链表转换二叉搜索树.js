/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  // 快慢指针
  function traverse(head, tail) {
    if (head === tail) return null;

    let slow = (fast = head);

    while (fast !== tail && fast.next !== tail) {
      fast = fast.next.next;
      slow = slow.next;
    }

    const root = new TreeNode(slow.val);

    root.left = traverse(head, slow);
    root.right = traverse(slow.next, tail);

    return root;
  }

  return traverse(head, null);
};
// @lc code=end
