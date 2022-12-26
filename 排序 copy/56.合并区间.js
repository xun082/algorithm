/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  /**
   * @author xun
   * @method 排序
   * @timeComplexity O(nlg n)
   * @spaceComplexity O(log n)
   */
  if (!intervals.length) return [];

  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let candidate = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    if (candidate[1] >= current[0]) {
      candidate[1] = Math.max(current[1], candidate[1]); // 左端不变,右端取最大
    } else {
      result.push(candidate);
      candidate = current;
    }
  }
  result.push(candidate);
  return result;
};
// @lc code=end
