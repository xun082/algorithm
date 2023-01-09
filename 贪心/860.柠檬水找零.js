/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  /**
   * @author xun
   * @method 贪心算法
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let five = 0;
  let ten = 0;

  for (const bill of bills) {
    if (bill === 5) {
      five += 1;
    } else if (bill === 10) {
      if (five === 0) return false;

      five -= 1;
      ten += 1;
    } else {
      if (five > 0 && ten > 0) {
        five -= 1;
        ten -= 1;
      } else if (five >= 3) five -= 3;
      else return false;
    }
  }
  return true;
};
// @lc code=end
