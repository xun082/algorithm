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

  if (head === null) return null;

  let fast = head;
  let slow = head;

  while (fast !== null) {
    slow = slow.next;
    if (fast.next !== null) {
      fast = fast.next.next;
    } else {
      // 无环
      return null;
    }
    // 如果相同,证明有还
    if (fast === slow) {
      let node = head;
      while (node !== slow) {
        // 查找下标
        node = node.next;
        slow = slow.next;
      }
      return node;
    }
  }
  return null;
};
// @lc code=end
