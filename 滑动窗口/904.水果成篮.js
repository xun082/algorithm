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
  /**
   * @author xun
   * @method 滑动窗口
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const length = fruits.length;
  const current = new Map();

  let left = 0;
  let ans = 0;

  for (let right = 0; right < length; right++) {
    current.set(fruits[right], (current.get(fruits[right]) || 0) + 1);

    while (current.size > 2) {
      current.set(fruits[left], current.get(fruits[left]) - 1);

      if (current.get(fruits[left]) === 0) current.delete(fruits[left]);

      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};
// @lc code=end
