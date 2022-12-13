/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  /**
   * @author xun
   * @method 排序
   * @timeComplexity O(N log N)
   * @spaceComplexity O(N)
   */
  const result = [];
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);

  let current = [-1, -1];
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] > current[1]) {
      current = [...intervals[i]];
      result.push(current);
    } else if (intervals[i][1] > current[1]) {
      current[1] = intervals[i][1];
    }
  }

  return result;
};
// @lc code=end
