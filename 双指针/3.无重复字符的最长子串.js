/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  /**
   * @author xun
   * @method 滑动窗口
   * @timeComplexity O(N)
   * @spaceComplexity O(E)
   */
  let left = 0;
  let result = 0;
  let right = 0;
  const n = s.length;
  const map = new Map();

  while (right < n) {
    const char = s[right];
    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1;
    }
    result = Math.max(result, right - left + 1);
    map.set(char, right);
    right++;
  }
  return result;
};
// @lc code=end
