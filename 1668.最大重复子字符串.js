/*
 * @lc app=leetcode.cn id=1668 lang=javascript
 *
 * [1668] 最大重复子字符串
 */

// @lc code=start
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  // 边界判断
  if (word.length > sequence.length || !sequence.includes(word)) return 0;
  let str = word;
  let count = 0;

  while (str.length <= sequence.length) {
    if (sequence.includes(str)) {
      str += word;
      count++;
    } else {
      return count;
    }
  }

  return count;
};
// @lc code=end
