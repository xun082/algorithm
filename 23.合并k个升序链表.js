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
  let heap = new Heap((a, b) => a.val < b.val);
  for (let item of lists) {
    if (item !== null) {
      heap.push(item);
    }
  }
  let ret = new ListNode(null),
    p = ret;
  while (heap.data.length) {
    let temp = heap.pop();
    p.next = temp;
    if (temp.next) {
      heap.push(temp.next);
    }
    p = p.next;
  }
  return ret.next;
};
class Heap {
  constructor(cmp) {
    this.data = [];
    this.cmp = cmp;
  }
  get size() {
    return this.data.length;
  }
  get top() {
    return this.data[0];
  }
  getData() {
    return this.data;
  }
  swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
  // 向上冒泡
  up(i) {
    let index = this.data.length - 1;
    while (index > 0) {
      let p = Math.floor((index - 1) / 2);
      if (p >= 0 && this.cmp(this.data[index], this.data[p])) {
        this.swap(index, p);
        index = p;
      } else {
        break;
      }
    }
  }
  // 下沉操作
  down(i) {
    if (this.data.length < 2) return;
    let index = 0,
      l = 2 * index + 1,
      len = this.data.length;
    while (l < len) {
      let r = l + 1;
      if (r < len && this.cmp(this.data[r], this.data[l])) l = r;
      if (this.cmp(this.data[index], this.data[l])) break;
      this.swap(index, l);
      index = l;
      l = index * 2 + 1;
    }
  }
  push(item) {
    this.data.push(item);
    this.up();
  }
  //删除堆顶元素
  pop() {
    this.swap(0, this.data.length - 1);
    const res = this.data.pop(); //已删除的元素（原来的堆顶元素）
    this.down();
    return res;
  }
}
// @lc code=end
