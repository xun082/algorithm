/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  /**
   * @author xun
   * @method 贪心算法
   * @timeComplexity O(N log N)
   * @spaceComplexity O(log n)
   */

  const length = intervals.length;
  if (!length) return 0;

  intervals.sort((a, b) => a[1] - b[1]);

  let right = intervals[0][1];
  let ans = 1;

  for (let i = 1; i < length; i++) {
    if (intervals[i][0] >= right) {
      ++ans;
      right = intervals[i][1];
    }
  }

  return length - ans;
};
// @lc code=end
