/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 双指针,截取中间,进行反转

  let slow = (fast = head);
  let prevent;
  while (fast && fast.next) {
    fast = fast.next.next;

    //   翻转
    let next = slow.next;
    slow.next = prevent;
    prevent = slow;
    slow = next;
  }
  // slow在中间 奇数问题
  if (fast) {
    slow = slow.next;
  }

  while (prevent && slow) {
    if (prevent.val !== slow.val) {
      return false;
    }
    prevent = prevent.next;
    slow = slow.next;
  }
  return true;
};
// @lc code=end
