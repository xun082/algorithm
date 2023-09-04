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
  /**
   * @author xun
   * @method 哈希表
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  // const cache = new Set();
  // while (head !== null) {
  //   if (cache.has(head)) {
  //     return head;
  //   }
  //   cache.add(head);
  //   head = head.next;
  // }
  // return null;
  /**
   * @author xun
   * @method  快慢指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */

  if (!head) return null;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;

    fast = fast.next.next;

    if (fast === slow) {
      let node = head;

      while (node !== slow) {
        node = node.next;
        slow = slow.next;
      }
      return node;
    }
  }

  return null;
};
// @lc code=end
