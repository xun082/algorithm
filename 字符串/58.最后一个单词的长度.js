/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  /**
   * @author xun
   * @method  反向遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let end = s.length - 1;

  while (end >= 0 && s[end] === " ") end--;

  if (end < 0) return 0;

  let start = end;
  while (start >= 0 && s[start] !== " ") start--;

  return end - start;
};
// @lc code=end
