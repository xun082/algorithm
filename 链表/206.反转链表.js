/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
  /**
   * @author xun
   * @method  迭代
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  // let previous = null;
  // let current = head;
  // while (current) {
  //   const next = current.next;
  //   current.next = previous;
  //   previous = current;
  //   current = next;
  // }
  // return previous;
  /**
   * @author xun
   * @method 递归
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  // if (head === null || head.next === null) return head;
  // const newHead = reverseList(head.next);
  // head.next.next = head;
  // head.next = null;
  // return newHead;
  /**
   * @author xun
   * @method 双指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  if (head === null) return null;

  let current = head;

  while (head.next !== null) {
    let temp = head.next.next;

    head.next.next = current;
    // 每次都让 head 下一个结点的 next 指向 current ，实现一次局部反转
    current = head.next;
    // head 的 next 指针同时 往前移动一个位置
    head.next = temp;
  }
  return current;
};
// @lc code=end
