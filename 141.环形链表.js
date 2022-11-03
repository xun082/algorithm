/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  /**
   * @author 备忘录
   */
  // const cache = new Set();

  // while (head) {
  //   if (cache.has(head)) {
  //     // 条件满足,返回 true
  //     return true;
  //   } else {
  //     cache.add(head);
  //   }
  //   head = head.next;
  // }
  // // 遍历完还不满足返回 false
  // return false;

  /**
   * @author 快慢指针
   */
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) return true;
  }
  return false;
};
// @lc code=end
