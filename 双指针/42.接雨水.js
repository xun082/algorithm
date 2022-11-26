/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  // const length = height.length;
  // if (length === 0) return 0;
  // const leftMax = new Array(length).fill(0);
  // leftMax[0] = height[0];
  // for (let i = 1; i < length; i++) {
  //   leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  // }
  // const rightMax = new Array(length).fill(0);
  // rightMax[length - 1] = height[length - 1];
  // for (let i = length - 2; i >= 0; i--) {
  //   rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  // }
  // let result = 0;
  // for (let i = 0; i < length; i++) {
  //   result += Math.min(leftMax[i], rightMax[i]) - height[i];
  // }
  // return result;
  //
  // /**
  //  * @author xun
  //  * @method 单调栈
  //  * @timeComplexity O(N)
  //  * @spaceComplexity O(N)
  //  */
  // let result = 0;
  // const stack = [];
  // const length = height.length;
  // for (let i = 0; i < length; i++) {
  //   while (stack.length && height[i] > height[stack[stack.length - 1]]) {
  //     const top = stack.pop();
  //     if (!stack.length) break;
  //     const left = stack[stack.length - 1];
  //     const currentWidth = i - left - 1;
  //     const currentHeight = Math.min(height[left], height[i]) - height[top];
  //     result += currentHeight * currentWidth;
  //   }
  //   stack.push(i);
  // }
  // return result;
  //
  /**
   * @author xun
   * @method 双指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let result = 0;

  let left = 0;
  let right = height.length - 1;
  let leftMAx = 0;
  let rightMax = 0;

  while (left < right) {
    leftMAx = Math.max(leftMAx, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    if (height[left] < height[right]) {
      result += leftMAx - height[left];
      left++;
    } else {
      result += rightMax - height[right];
    right--;
    }
  }

  return result;
};
// @lc code=end
