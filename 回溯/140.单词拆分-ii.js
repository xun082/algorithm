/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  /**
   * @author xun
   * @method 回溯
   * @timeComplexity O(n⋅2**n)
   * @spaceComplexity O(n⋅2**n)
   */
  const map = new Map();
  const wordBreaks = backtrack(s, s.length, new Set(wordDict), 0, map);

  const breakList = [];

  for (const wordBreak of wordBreaks) {
    breakList.push(wordBreak.join(" "));
  }

  return breakList;
};

function backtrack(s, length, wordSet, index, map) {
  if (map.has(index)) return map.get(index);

  const wordBreaks = [];

  if (index === length) wordBreaks.push([]);

  for (let i = index + 1; i <= length; i++) {
    const word = s.substring(index, i);

    if (wordSet.has(word)) {
      const nextWordBreaks = backtrack(s, length, wordSet, i, map);

      for (const nextWordBreak of nextWordBreaks) {
        const wordBreak = [word, ...nextWordBreak];
        wordBreaks.push(wordBreak);
      }
    }
  }

  map.set(index, wordBreaks);
  return wordBreaks;
}

// @lc code=end
