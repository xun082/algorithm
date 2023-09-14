/*
 * @lc app=leetcode.cn id=817 lang=javascript
 *
 * [817] 链表组件
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
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {
  /**
   * @author xun
   * @method 计算组件的起始位置
   * @timeComplexity O(N)
   * @spaceComplexity O(m)
   */
  const set = new Set([...nums]);

  let inSet = false;
  let res = 0;
  while (head) {
    if (set.has(head.val)) {
      if (!inSet) {
        inSet = true;
        res++;
      }
    } else {
      inSet = false;
    }
    head = head.next;
  }

  return res;
};
// @lc code=end
