/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  /**
   * @author xun
   * @method 哈希表
   * @timeComplexity O(N)
   * @spaceComplexity O(∣Σ∣)
   */
  const position = new Map();
  const length = s.length;

  for (const [index, char] of Array.from(s).entries()) {
    if (position.has(char)) position.set(char, -1);
    else position.set(char, index);
  }

  let first = length;

  for (const pos of position.values()) {
    if (pos !== -1 && pos < first) first = pos;
  }

  return first === length ? -1 : first;
};
// @lc code=end
