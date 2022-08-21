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
  if (headA === null || headB === null) return null;

  let pA = headA;
  let pB = headB;

  //pA 不为空，则将指针 pA 移到下一个节点；如果指pB 不为空，则将指针pB 移到下一个节点。

  // 如果指针pA 为空，则将指针pA 移到链表headB 的头节点；如果指针pB 为空，则将指针 \textit{pB}pB 移到链表 \textit{headA}headA 的头节点。

  // 当指针pA 和pB 指向同一个节点或者都为空时，返回它们指向的节点或者null。

  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }

  return pA;
};
// @lc code=end
