/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // 哨兵节点
  let dummy = {
    next: head,
  };

  let temp = dummy;

  for (let i = 0; i < left - 1; i++) {
    temp = temp.next;
  }
  // 走到left的位置
  let previous = temp.next;

  let current = previous.next;

  for (let j = 0; j < right - left; j++) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  temp.next.next = current;
  temp.next = previous;

  return dummy.next;
};
// @lc code=end
