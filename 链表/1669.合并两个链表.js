/*
 * @lc app=leetcode.cn id=1669 lang=javascript
 *
 * [1669] 合并两个链表
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
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  /**
   * @author xun
   * @method 模拟
   * @timeComplexity O(N + M)
   * @spaceComplexity O(1)
   */
  let planA = list1;
  for (let i = 0; i < a - 1; i++) {
    planA = planA.next;
  }

  let planB = planA;

  for (let i = 0; i < b - a + 2; i++) {
    planB = planB.next;
  }

  planA.next = list2;

  while (list2.next) {
    list2 = list2.next;
  }

  list2.next = planB;

  return list1;
};
// @lc code=end
