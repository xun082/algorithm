/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  // 可以装两种类型的水果,但是必须连着的,返回能装的最多的棵果树的数量
  // 滑动窗口
  const map = new Map();
  let max = 1;
  let j = 0;
  for (let i = 0; i < fruits.length; i++) {
    map.set(fruits[i], i);
    if (map.size > 2) {
      let minIndex = fruits.length - 1;
      for (const [_, index] of map) {
        if (index < minIndex) {
          minIndex = index;
        }
      }

      // 删除掉位置比较靠前的水果
      map.delete(fruits[minIndex]);
      // 窗口滑动
      j = minIndex + 1;
    }
    max = Math.max(max, i - j + 1);
  }
  return max;
};
// @lc code=end
