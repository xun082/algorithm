/*
 * @lc app=leetcode.cn id=1721 lang=javascript
 *
 * [1721] 交换链表中的节点
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
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  /**
   * @author xun
   * @method 快慢指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let current = head;
  for (let i = 0; i < k - 1; i++) {
    current = current.next;
  }

  let currentFirst = current;
  let currentSecond = head;

  while (current.next) {
    current = current.next;
    currentSecond = currentSecond.next;
  }

  [currentFirst.val, currentSecond.val] = [currentSecond.val, currentFirst.val];

  return head;
};
// @lc code=end
