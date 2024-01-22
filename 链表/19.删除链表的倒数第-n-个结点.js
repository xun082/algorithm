/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  /**
   * @author xun
   * @method 快慢指针
   * @时间复杂度 O(L)
   * @空间复杂度 O(1)
   */
  let slow = head;
  let fast = head;

  let i = 0;
  while (i < n) {
    fast = fast.next;
    i++;
  }

  if (fast === null) return head.next;

  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return head;
};
// @lc code=end
