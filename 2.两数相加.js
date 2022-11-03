/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
   * @author 模拟
   */
  // var ten = 0;
  // var head = null,
  //   tail = null;
  // while (l1 || l2) {
  //   var l1Val = l1 !== null && l1.val ? l1.val : 0;
  //   var l2Val = l2 !== null && l2.val ? l2.val : 0;
  //   var sum = l1Val + l2Val + ten;
  //   if (sum >= 10) {
  //     ten = 1;
  //   } else {
  //     ten = 0;
  //   }
  //   sum = sum % 10;
  //   if (!head) {
  //     head = tail = new ListNode(sum);
  //   } else {
  //     tail.next = new ListNode(sum);
  //     tail = tail.next;
  //   }
  //   if (l1) {
  //     l1 = l1.next;
  //   }
  //   if (l2) {
  //     l2 = l2.next;
  //   }
  // }
  // if (ten) {
  //   tail.next = new ListNode(ten);
  // }
  // return head;
  /**
   * @author 哨兵节点
   */

  const dummy = new ListNode(null);

  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    const l1Val = l1 !== null ? l1.val : 0;
    const l2Val = l2 !== null ? l2.val : 0;

    const sumVal = carry + l1Val + l2Val;
    // 取整除数,不仅消除要超过10以上的数值影响,还可以判断是否要进位到sumVal
    carry = Math.floor(sumVal / 10);
    // 去余数作为链表的下一个节点
    current.next = new ListNode(sumVal % 10);

    current = current.next;

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }

    // 如果最后溢出1的话,就添加巍峨1的节点即可
    if (carry > 0) {
      current.next = new ListNode(carry);
    }
  }

  return dummy.next;
};
// @lc code=end
