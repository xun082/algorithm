/*
 * @lc app=leetcode.cn id=769 lang=javascript
 *
 * [769] 最多能完成排序的块
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  /**
   * @author xun
   * @method 贪心
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let m = 0;
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    m = Math.max(m, arr[i]);

    if (m === i) res++;
  }
  return res;
};
// @lc code=end
