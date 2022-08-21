/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var ten = 0;
  var head = null,
    tail = null;
  while (l1 || l2) {
    var l1Val = l1 !== null && l1.val ? l1.val : 0;
    var l2Val = l2 !== null && l2.val ? l2.val : 0;
    var sum = l1Val + l2Val + ten;
    if (sum >= 10) {
      ten = 1;
    } else {
      ten = 0;
    }
    sum = sum % 10;
    if (!head) {
      head = tail = new ListNode(sum);
    } else {
      tail.next = new ListNode(sum);
      tail = tail.next;
    }
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  if (ten) {
    tail.next = new ListNode(ten);
  }
  return head;
};
// @lc code=end
