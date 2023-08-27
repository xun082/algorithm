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
  if (!strs.length) return "";

  let ans = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (j < ans.length && ans[j] === strs[i][j]) {
      j++;
    }
    ans = ans.substring(0, j);
    if (ans === "") return ans;
  }
  return ans;
};
// @lc code=end
