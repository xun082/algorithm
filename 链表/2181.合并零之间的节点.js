/*
 * @lc app=leetcode.cn id=2181 lang=javascript
 *
 * [2181] 合并零之间的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
  head = head.next;
  let current = head;

  while (current && current.next) {
    if (current.next.val !== 0) {
      current.val += current.next.val;
      current.next = current.next.next;
    } else {
      current.next = current.next.next;
      current = current.next;
    }
  }

  return head;
};
// @lc code=end
