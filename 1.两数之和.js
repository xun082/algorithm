/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
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

