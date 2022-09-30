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
  if (intervals.length === 0) return [];

  let result = [];

  intervals.sort((a, b) => a[0] - b[0]); //数组首位排序函数sort

  let candidate = intervals[0]; //排序后选择第一个数组

  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i]; //从第二个开始取current

    if (candidate[1] >= current[0]) {
      //第一个数组的第二个元素和第二个数组的第一个元素对比
      //   有重合,合并
      candidate[1] = Math.max(current[1], candidate[1]); //左端不变,右端取最大
    } else {
      // 不重复,不能合并
      result.push(candidate);
      candidate = current; //把current放到临时变量中去
    }
  }

  result.push(candidate);

  return result;
};
// @lc code=end
