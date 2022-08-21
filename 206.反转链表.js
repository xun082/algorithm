/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
  let previous = null;
  let current = head;
  let next = head;

  while (current) {
    // next = current.next;
    // current.next = previous;
    // previous = current;
    // current = next;
    [current.next, previous, current] = [previous, current, current.next];
  }

  return previous;
};
// @lc code=end
