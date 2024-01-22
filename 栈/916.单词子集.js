/*
 * @lc app=leetcode.cn id=916 lang=javascript
 *
 * [916] 单词子集
 */

// @lc code=start
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  /**
   * @author xun
   * @method 哈希
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const b = new Array(26).fill(0);

  words2.forEach((w) => {
    const temp = new Array(26).fill(0);

    for (const char of w) {
      const index = char.charCodeAt() - 97;

      if (temp[index]++ === b[index]) b[index]++;
    }
  });

  return words1.filter((w) => {
    const temp = b.slice();
    for (const c of w) {
      const index = c.charCodeAt() - 97;

      if (temp[index] > 0) temp[index]--;
    }

    return temp.every((current) => current === 0);
  });
};
// @lc code=end
