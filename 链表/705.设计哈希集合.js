/*
 * @lc app=leetcode.cn id=705 lang=javascript
 *
 * [705] 设计哈希集合
 */

// @lc code=start

var MyHashSet = function () {
  this.BASE = 769;
  this.data = new Array(this.BASE).fill(0).map(() => new Array());
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const h = this.hash(key);

  for (const element of this.data[h]) {
    if (element === key) return;
  }

  this.data[h].push(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const h = this.hash(key);

  const it = this.data[h];

  for (let i = 0; i < it.length; i++) {
    if (it[i] === key) {
      it.splice(i, 1);
      return;
    }
  }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const h = this.hash(key);
  for (const element of this.data[h]) {
    if (element === key) return true;
  }
  return false;
};

MyHashSet.prototype.hash = function (key) {
  return key % this.BASE;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end
