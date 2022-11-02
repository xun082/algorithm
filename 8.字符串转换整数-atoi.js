/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const n = s.length - 1; // 字符串长度
  let index = 0; // 遍历的第几位字符串
  let res = 0; //最终结果 如果没有数字 最终return res 就是0
  let sign = 1; // 符号 默认是正的
  const max = Math.pow(2, 31) - 1;
  const min = -Math.pow(2, 31);
  // 1、如果长度为0 就返回0
  if (s.length === 0) {
    return 0;
  }
  ///2、去空格
  while (s[index] === " ") {
    index++;
  }
  ///3、前置符号判断
  if (s[index] === "+") {
    sign = 1; // 如果是+号index就+1
    index++;
  } else if (s[index] === "-") {
    sign = -1; // 如果是减号 index+1并且signWie-1
    index++;
  }

  ///4、遍历字符
  let temp = 0;
  while (index <= n) {
    if (s[index] === " ") {
      debugger;
      return res * sign;
    }
    ///4、非数字判断
    let num = s[index] - "0"; // 转化为整数
    // 如果是非数字 上面运算是NaN 下面的条件一定会满足一个
    // NaN < 0 => false => !false 就是 true
    // 3 > 0 => true => !true 就是false

    // 易错1：这里如果写(!num >= 0 || !num <= 9 就会报错
    // !逻辑非的优先级大于比较运算符
    // 如果是非数字 - '0' => NaN => !NaN是true => true >= 0 是true
    // 如果是数字 比如 !3 => false => false >= 0 也是true 这样就区分不开数字还是非数字 都进入了if循环
    // 而!(num >= 0) => NaN >= 0 || NaN <= 0 都是false 取反就是true 进入if循环
    // 而3 >= 0 || 3 <= 9 都是 true 整体取反就是false 不进入

    // 易错2：num >=0 还是num > 0 应该是 num >=0 不然字符串 => "21474836460" 就会通过不过测试用例，0应该算进去 最终溢出 取2147483647 => max
    // 但是此时，"4193 with words"这个用例通过不了 原因是
    // ' ' - '0' 空字符串 减去 字符串'0' 结果是数字 0 下面if语句不会进入，可是题目要求只去除 前导空格，中间后置的空格是会算入的 因此while语句后面增加判断
    // 易错3: 溢出 | 碰到空格或者非字符时 return res 都记得乘以 sign符号
    if (!(num >= 0) || !(num <= 9)) {
      return res * sign;
    }

    res = res * 10 + num;
    debugger;
    if (res * sign >= max) {
      return max;
    } else if (res * sign <= min) {
      return min;
    }

    index++;
  }
  return sign * res;
};
// @lc code=end
