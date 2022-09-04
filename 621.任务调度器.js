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
  const arr = new Array(26).fill(0);

  for (const t of tasks) {
    arr[t.charCodeAt() - "A".charCodeAt()]++;
  }

  let max = Math.max(...arr);
  let result = (max - 1) * (n + 1);

  for (let i = 0; i < 26; i++) {
    if (arr[i] === max) {
      result++;
    }
  }

  return Math.max(result, tasks.length);
};
// @lc code=end
