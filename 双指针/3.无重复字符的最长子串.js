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
  let left = 0; //子串左边界位置
  let result = 0;

  const map = new Map();

  for (let right = 0; right < s.length; right++) {
    //该字符存在map中并且在字串中 注意 abbcdea 这种情况
    if (map.has(s[right]) && map.get(s[right]) >= left) {
      left = map.get(s[right]) + 1; //移动左边界至重复字符的下一个位置
    }
    result = Math.max(result, right - left + 1);

    map.set(s[right], right);
  }
  return result;
};
// @lc code=end
