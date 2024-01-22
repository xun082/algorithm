/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  /**
   * @author xun
   * @method 递归
   * @timeComplexity O(n + m)
   * @spaceComplexity O(n + m)
   */
  // if (list1 === null) return list2;
  // if (list2 === null) return list1;
  // if (list1.val < list2.val) {
  //   list1.next = mergeTwoLists(list1.next, list2);
  //   return list1;
  // } else {
  //   list2.next = mergeTwoLists(list1, list2.next);
  //   return list2;
  // }

  /**
   * @author xun
   * @method 迭代
   * @timeComplexity O(m+n)
   * @spaceComplexity O(1)
   */

  const preHead = new ListNode(0);

  let current = preHead;

  while (list1 !== null && list2 !== null) {
    if (list1.val >= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 === null ? list2 : list1;

  return preHead.next;
};
// @lc code=end
