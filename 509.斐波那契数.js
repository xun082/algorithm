/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var fib = function (n) {
//   if (n <= 1) return n;

//   // 缓存
//   const cache = [0, 1];

//   // 第一种解法
//   //   function memoize(number) {
//   //     if (cache[number] !== undefined) {
//   //       return cache[number];
//   //     } else {
//   //       // 递归
//   //       cache[number] = memoize(number - 1) + memoize(number - 2);
//   //       return cache[number];
//   //     }
//   //   }

//   //   const result = memoize(n);

//   //   return result;

//   for (let i = 2; i <= n; i++) {
//     cache[i] = cache[i - 1] + cache[i - 2];
//   }

//   return cache[n];
// };

var fib = function (n) {
  if (n <= 1) return n;

  // 优化空间复杂度
  let prev1 = 0;
  let prev2 = 1;
  let result = 0;

  for (let i = 2; i <= n; i++) {
    result = prev1 + prev2;
    prev1 = prev2;
    prev2 = result;
  }

  return result;
};
// @lc code=end
