/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let str = x.toString(); //转成字符串
  let arrStr = str.split(""); //分割成数组
  if (arrStr[0] !== "-") {
    let num = Number(arrStr.reverse().join("")); // 翻转数组-》转成字符串-》转成数字
    if (num <= 2147483647 && num >= -2147483648) {
      return num;
    } else {
      return 0;
    }
  } else if (arrStr[0] === "-") {
    delete arrStr[0]; //删除第一位负号
    let num = Number(arrStr.reverse().join("")); //翻转数组-》转成字符串-》转成数字
    if (num <= 2147483647 && num >= -2147483648) {
      return -num; //增加负号
    } else {
      return 0;
    }
  }
};
// @lc code=end
