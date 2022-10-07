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
  const n = s.length;
  const set = new Set(wordDict);
  let arr = new Array(n + 1).fill(false);
  arr[0] = true;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] && set.has(s.substr(j, i - j))) {
        //动态转移方程
        arr[i] = true;
        break;
      }
    }
  }
  return arr[n];
};

// @lc code=end
