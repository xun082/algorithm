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
  let fiveNum = 0;
  let tenNum = 0;
  for (let i = 0; i < bills.length; i++) {
    let bill = bills[i];
    if (bill === 5) {
      fiveNum++;
    } else if (bill === 10) {
      if (fiveNum > 0) {
        fiveNum--;
        tenNum++;
      } else {
        return false;
      }
    } else {
      // 20的情况下
      if (tenNum > 0 && fiveNum > 0) {
        fiveNum--;
        tenNum--;
      } else if (fiveNum > 2) {
        fiveNum -= 3;
      } else {
        return false;
      }
    }
  }
  return true; 
};
// @lc code=end
