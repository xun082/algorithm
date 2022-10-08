/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function (head) {
  if (head === null) return head;

  const dummy = new ListNode(0);

  dummy.next = head;

  let lastStarted = head;
  let current = head.next;
  // current为待插入元素
  while (current !== null) {
    if (lastStarted.val <= current.val) {
      lastStarted = lastStarted.next;
    } else {
      // 实行链表插入
      let previous = dummy;
      while (previous.next.val <= current.val) {
        previous = previous.next;
      }
      lastStarted.next = current.next;
      current.next = previous.next;
      previous.next = current;
    }
    current = lastStarted.next;
  }

  return dummy.next;
};
// @lc code=end
