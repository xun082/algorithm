/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  /**
   * @author xun
   * @method 递归
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  // if (head === null) return head;
  // head.next = removeElements(head.next, val);
  // return head.val === val ? head.next : head;
  /**
   * @author xun
   * @method 迭代
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */

  const dummy = new ListNode(0);

  dummy.next = head;

  let temp = dummy;

  while (temp.next !== null) {
    if (temp.next.val === val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }
  return dummy.next;
};
// @lc code=end
