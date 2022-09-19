/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const map = new Map();

  const result = [];

  let i = 0;
  while (i + 10 <= s.length) {
    const dna = s.substring(i, i + 10);
    if (map.get(dna) === undefined) {
      map.set(dna, 1);
    } else if (map.get(dna) === 1) {
      // 大于2属于正确答案
      map.set(dna, 2);
      result.push(dna);
    } else {
      map.set(dna, map.get(dna) + 1);
    }
    i++;
  }

  return result;
};
// @lc code=end
