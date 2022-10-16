/*
 * @lc app=leetcode.cn id=593 lang=javascript
 *
 * [593] 有效的正方形
 */

// @lc code=start
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
  //四个点重合，则返回false
  if (
    p1[0] === p1[0] &&
    p1[1] === p1[1] &&
    p3[0] === p4[0] &&
    p3[1] === p4[1]
  ) {
    return false;
  }

  //四点排序

  const result = [p1, p2, p3, p4];
  result.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  //计算四条边的值
  let a =
    (result[1][0] - result[0][0]) ** 2 + (result[1][1] - result[0][1]) ** 2;

  let b =
    (result[2][0] - result[0][0]) ** 2 + (result[2][1] - result[0][1]) ** 2;
  let c =
    (result[3][0] - result[1][0]) ** 2 + (result[3][1] - result[1][1]) ** 2;
  let d =
    (result[3][0] - result[2][0]) ** 2 + (result[3][1] - result[2][1]) ** 2;

  // 四条边不等则返回false
  if (!(a === b && b == c && c === d && d === a)) return false;

  //一条边斜率为0另一条边斜率不存在情况
  if (result[0][0] == result[1][0] && result[0][1] == result[2][1]) return true;

  //计算斜率乘积是否等于-1，这里变形判断（y2-y1)*(y3-y4) + (x2-x1)*(x3-x4)=0
  let k =
    (result[1][0] - result[0][0]) * (result[2][0] - result[0][0]) +
    (result[1][1] - result[0][1]) * (result[2][1] - result[0][1]);
  return k == 0;
};
// @lc code=end
