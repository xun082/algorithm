/*
 * @lc app=leetcode.cn id=2296 lang=javascript
 *
 * [2296] 设计一个文本编辑器
 */

// @lc code=start

var TextEditor = function () {
  this.s = "";
  this.stack = [];
};

/**
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function (text) {
  this.s += text;
};

/**
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function (k) {
  if (this.s.length < k) k = this.s.length;

  this.s = this.s.slice(0, this.s.length - k);

  return k;
};

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function (k) {
  if (this.s.length < k) k = this.s.length;

  for (let i = 0, j = this.s.length - 1; i < k; i++, j--) {
    this.stack.push(this.s[j]);
  }

  this.s = this.s.slice(0, this.s.length - k);

  return this.s.slice(-10);
};

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function (k) {
  if (this.stack.length < k) k = this.s.length;

  for (let i = 0; i < k; i++) {
    this.s += this.stack.pop();
  }

  return this.s.slice(-10);
};

/**
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */
// @lc code=end
