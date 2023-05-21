/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  /**
   * @author xun
   * @method 贪心
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const arr = new Array(26).fill(0);

  for (const c of tasks) {
    //找到最大次数
    arr[c.charCodeAt() - "A".charCodeAt()]++;
  }

  let max = 0;
  for (let i = 0; i < 26; i++) {
    max = Math.max(max, arr[i]);
  }

  // 计算前n-1行n的间隔的时间大小
  let result = (max - 1) * (n + 1);

  for (let i = 0; i < 26; i++) {
    //计算和最大次数相同的字母个数，然后累加进 result
    if (arr[i] === max) result++;
  }

  return Math.max(result, tasks.length); // 在tasks的长度和ret中取较大的一个
};
// @lc code=end
