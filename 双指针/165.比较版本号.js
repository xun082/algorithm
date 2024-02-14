/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  /**
   * @author xun
   * @method 双指针
   * @timeComplexity O(M + N)
   * @spaceComplexity O(1)
   */
  const m = version1.length;
  const n = version2.length;

  let i = 0;
  let j = 0;

  while (i < m || j < n) {
    let x = 0;
    let y = 0;

    while (i < m && version1[i] !== ".") {
      x = x * 10 + version1[i] - "0";
      i++;
    }
    i++;

    while (j < n && version2[j] !== ".") {
      y = y * 10 + version2[j] - "0";
      j++;
    }
    j++;

    if (x !== y) return x > y ? 1 : -1;
  }

  return 0;
};
// @lc code=end
