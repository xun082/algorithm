/*
 * @lc app=leetcode.cn id=1019 lang=javascript
 *
 * [1019] 链表中的下一个更大节点
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
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
  /**
   * @author xun
   * @method 单调栈
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const ans = [];
  const stack = [];

  let current = head;
  let index = 0;

  while (current) {
    ans.push(0);

    while (stack.length && stack[stack.length - 1][0] < current.val) {
      ans[stack.pop()[1]] = current.val;
    }

    stack.push([current.val, index]);
    current = current.next;

    index++;
  }

  return ans;
};
// @lc code=end
