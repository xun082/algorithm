/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const position = new Map();
  const queue = [];

  for (const [index, chart] of Array.from(s).entries()) {
    if (!position.has(chart)) {
      position.set(chart, index);
      q.push([s[index], index]);
    } else {
      position.set(chart, -1);
      while (queue.length && position.get(queue[0][0]) === -1) {
        //   存在着重复的字符,就删除
        queue.shift();
      }
    }
  }
  return queue.length ? queue[0][1] : -1;
};
// @lc code=end
