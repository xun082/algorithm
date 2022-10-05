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
  const result = [];
  let i = 0;
  const length = intervals.length;

  while (i < length && intervals[i][1] < newInterval[0]) {
    //   当前遍历的 newInterval 左边不重复的区间
    result.push(intervals[i]);
    i++;
  }

  while (i < length && intervals[i][0] <= newInterval[1]) {
    // 当前遍历的是旧的数组的左边,新的数组的右边
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]); //左端取较小者，更新给新值的左端
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]); //右端取较大者，更新给新值的右端
    i++;
  }

  result.push(newInterval);

  while (i < length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};
// @lc code=end
