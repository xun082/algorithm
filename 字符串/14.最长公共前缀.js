/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  /**
   * @author xun
   * @method 纵向扫描
   * @timeComplexity O(MN)
   * @spaceComplexity O(1)
   */
  if (strs === null || strs.length === 0) return "";

  let length = strs[0].length;
  let count = strs.length;

  for (let i = 0; i < length; i++) {
    let c = strs[0].charAt(i);
    for (let j = 1; j < count; j++) {
      if (i === strs[j].length || strs[j].charAt(i) !== c) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
};
// @lc code=end
