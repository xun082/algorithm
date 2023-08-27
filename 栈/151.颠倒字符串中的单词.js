/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  /**
   * @author xun
   * @method 栈
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const words = [];
  let start = s.length - 1;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (i < start) {
        words.push(s.slice(i + 1, start + 1));
      }
      start = i - 1;
    } else if (i === 0) {
      words.push(s.slice(i, start + 1));
    }
  }

  return words.join(" ");
};
// @lc code=end
