/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function (head) {
  /**
   * @author xun
   * @method
   * @timeComplexity O(N * N)
   * @spaceComplexity O(1)
   */

  if (!head) return head;

  let current = head;
  const result = new ListNode(0);

  while (current !== null) {
    let temp = result;

    while (temp.next !== null && temp.next.val < current.val) {
      temp = temp.next;
    }

    let t = temp.next;
    temp.next = current;
    current = current.next;

    temp.next.next = t;
  }

  return result.next;
};
// @lc code=end
