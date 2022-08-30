/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  const dummy = new ListNode();
  dummy.next = head;
  let current = dummy;

  while (current.next !== null && current.next.next !== null) {
    const n1 = current.next;
    const n2 = current.next.next;

    current.next = n2;
    n1.next = n2.next;
    n2.next = n1;
    current = n1;
  }

  return dummy.next;
};
// @lc code=end
