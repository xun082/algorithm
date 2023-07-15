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
  /**
   * @author xun
   * @method 穿针引线
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const dummyHead = new ListNode(0);
  dummyHead.next = head;

  let previous = dummyHead;

  for (let i = 0; i < left - 1; i++) {
    previous = previous.next;
  }

  let current = previous.next;

  for (let i = 0; i < right - left; i++) {
    const node = current.next;
    current.next = node.next;
    node.next = previous.next;
    previous.next = node;
  }

  return dummyHead.next;
};
// @lc code=end
