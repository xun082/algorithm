/*
 * @lc app=leetcode.cn id=2744 lang=javascript
 *
 * [2744] 最大字符串配对数目
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  /**
   * @author xun
   * @method 哈希表
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const n = words.length;
  const seen = new Set();

  let ans = 0;

  for (const word of words) {
    if (seen.has(word.charCodeAt(1) * 100 + word.charCodeAt(0))) {
      ans++;
    }
    seen.add(word.charCodeAt(0) * 100 + word.charCodeAt(1));
  }

  return ans;
};
// @lc code=end
