/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  /**
   * @author xun
   * @method 哈希表
   * @timeComplexity O(M+N)
   * @spaceComplexity O(N)
   */
  // const cache = new Set();
  // let temp = headA;
  // while (temp !== null) {
  //   cache.add(temp);
  //   temp = temp.next;
  // }
  // temp = headB;
  // while (temp !== null) {
  //   if (cache.has(temp)) {
  //     return temp;
  //   }
  //   temp = temp.next;
  // }
  // return null;
  /**
   * @author xun
   * @method  快慢指针
   * @timeComplexity O(M + N)
   * @spaceComplexity O(1)
   */
  if (headA === null || headB === null) return null;

  let planA = headA;
  let planB = headB;

  while (planA !== planB) {
    planA = planA === null ? headB : planA.next;
    planB = planB === null ? headA : planB.next;
  }
  return planA;
};
// @lc code=end
