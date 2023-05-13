/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  function transform(item, array) {
    while (item) {
      array.push(item.val);
      item = item.next;
    }
  }

  const array = [];
  let result = new ListNode(null);

  lists.map((item) => transform(item, array));
  array.sort((a, b) => a - b);

  for (let i = array.length - 1; i >= 0; i--) {
    let temp = new ListNode(null);
    result.val = array[i];
    temp.next = result;
    result = temp;
  }

  return result.next;
};

// @lc code=end
