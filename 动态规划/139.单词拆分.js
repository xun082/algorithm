/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */
// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function (s, wordDict) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(N*N)
   * @spaceComplexity O(N)
   */
  const length = s.length;
  const path = new Array(length + 1).fill(false);
  // 空子前缀串默认能被拆分
  path[0] = true;

  for (let i = 1; i <= length; i++) {
    for (let j = 0; j <= i - 1; j++) {
      //存在一个字串能被拆分,并且剩余的字符串能在单词表中找到就表示当前单词能被拆分
      if (path[j] && wordDict.indexOf(s.substring(j, i)) !== -1) {
        path[i] = true;
      }
    }
  }
  return path[length];
};

// @lc code=end
