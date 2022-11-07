/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  /**
   * @author xun
   * @method 栈
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  // 创建两个栈,把元素都推到栈里
  const stack1 = [];
  const stack2 = [];

  while (l1 || l2) {
    if (l1) {
      stack1.push(l1.val);
      l1 = l1.next;
    }
    if (l2) {
      stack2.push(l2.val);
      l2 = l2.next;
    }
  }

  const result = new ListNode(0);

  let add = 0;

  while (stack1.length || stack2.length) {
    let num = 0;

    num += stack1.length ? stack1.pop() : 0;
    num += stack2.length ? stack2.pop() : 0;
    num += add;

    if (num > 9) {
      add = parseInt(num / 10);
      num %= 10;
    } else {
      add = 0;
    }

    // 头部
    let node = new ListNode(num);
    node.next = result.next;
    result.next = node;
  }

  if (add !== 0) {
    let node = new ListNode(add);
    node.next = result.next;
    result.next = node;
  }

  return result.next;
};
// @lc code=end
