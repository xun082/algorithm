/*
 * @lc app=leetcode.cn id=2095 lang=javascript
 *
 * [2095] 删除链表的中间节点
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
var deleteMiddle = function (head) {
  /**
   * @author xun
   * @method 快慢指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let slow = head;
  let fast = head;

  if (!(head && head.next)) return null;

  while (fast && fast.next) {
    fast = fast.next.next;

    if (!(fast && fast.next)) {
      slow.next = slow.next.next;
    }

    slow = slow.next;
  }

  return head;
};
// @lc code=end
