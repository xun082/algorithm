/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // // 初始化一个栈
  // const stack = [];
  // const result = new Array(temperatures.length).fill(0);
  // for (let i = 0; i < temperatures.length; i++) {
  //   // 若栈不为零,且存在打破递减趋势的温度值
  //   while (
  //     stack.length &&
  //     temperatures[i] > temperatures[stack[stack.length - 1]]
  //   ) {
  //     //   将栈顶温度值对于的索引出栈
  //     const top = stack.pop();
  //     result[top] = i - top;
  //   }
  //   //   栈内存的是索引值
  //   stack.push(i);
  // }
  // return result;
  /**
   * @author xun
   * @method 单调栈
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const stack = [];

  const result = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const top = stack.pop();
      result[top] = i - top;
    }
    stack.push(i);
  }

  return result;
};
// @lc code=end
