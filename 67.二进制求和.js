/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let length = Math.max(a.length, b.length);

  //在前面补0使得等长
  a = a.padStart(length, 0).split("");
  b = b.padStart(length, 0).split("");

  const result = [];

  // 进位
  let isTen = 0;
  for (let i = length - 1; i >= 0; i--) {
    // 从后面开始
    a[i] = Number(a[i]);
    b[i] = Number(b[i]);
    if (a[i] + b[i] + isTen === 3) {
      // 在前面插入1
      result.unshift(1);
      isTen = 1;
    } else if (a[i] + b[i] + isTen === 2) {
      result.unshift(0);
      isTen = 1;
    } else if (a[i] + b[i] + isTen === 1) {
      result.unshift(1);
      isTen = 0;
    } else {
      result.unshift(0);
      isTen = 0;
    }
  }

  // 最后一个进位是1
  if (isTen === 1) result.unshift(1);

  // 转换为字符
  return result.join("");
};
// @lc code=end
