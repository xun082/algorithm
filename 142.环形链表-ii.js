/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head === null) return null;

  let slow = head;
  let fast = head;

  let isCycle = false;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      isCycle = true;
      break;
    }
  }

  if (!isCycle) {
    return null;
  }

  fast = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return fast;
};
// @lc code=end
