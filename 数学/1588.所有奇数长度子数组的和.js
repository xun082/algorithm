/*
 * @lc app=leetcode.cn id=1588 lang=javascript
 *
 * [1588] 所有奇数长度子数组的和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  /**
   * @author xun
   * @method 暴力
   * @timeComplexity O(N ** 3)
   * @spaceComplexity O(1)
   */
  //   let sum = 0;
  //   const n = arr.length;
  //   for (let start = 0; start < n; start++) {
  //     for (let length = 1; start + length <= n; length += 2) {
  //       const end = start + length - 1;
  //       for (let i = start; i <= end; i++) {
  //         sum += arr[i];
  //       }
  //     }
  //   }
  //   return sum;
  /**
   * @author xun
   * @method 数学
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let sum = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    const leftCount = i;
    const rightCount = n - i - 1;

    const leftOdd = Math.floor((leftCount + 1) / 2);
    const rightOdd = Math.floor((rightCount + 1) / 2);

    const leftEven = Math.floor(leftCount / 2) + 1;
    const rightEven = Math.floor(rightCount / 2) + 1;

    sum += arr[i] * (leftOdd * rightOdd + leftEven * rightEven);
  }

  return sum;
};
// @lc code=end
