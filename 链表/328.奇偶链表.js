/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
var oddEvenList = function (head) {
  /**
   * @author xun
   * @method 节点分离后合并
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */

  if (head === null) {
    return head;
  }

  let evenHead = head.next; // 偶节点
  let odd = head; // 奇节点
  let even = evenHead; // 偶节点

  // 分出奇数链表和偶数链表
  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  // 合并
  odd.next = evenHead;

  return head;
};
// @lc code=end
