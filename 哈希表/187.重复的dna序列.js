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
  /**
   * @author xun
   * @method 哈希表
   * @timeComplexity O(NL)
   * @spaceComplexity O(NL)
   */
  const L = 10;
  const ans = [];
  const map = new Map();

  const length = s.length;

  for (let i = 0; i <= length - L; i++) {
    const sub = s.slice(i, i + L);
    map.set(sub, (map.get(sub) || 0) + 1);

    if (map.get(sub) === 2) ans.push(sub);
  }

  return ans;
};
// @lc code=end
