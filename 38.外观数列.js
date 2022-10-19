/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let str = "1";

  for (let i = 2; i <= n; i++) {
    const sb = [];
    let start = 0;
    let pos = 0;

    while (pos < str.length) {
      while (pos < str.length && str[pos] === str[start]) {
        pos++;
      }
      sb.push("" + (pos - start) + str[start]);
      start = pos;
    }
    str = sb.join("");
  }

  return str;
};
// @lc code=end
