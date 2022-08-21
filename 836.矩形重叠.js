/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  /**
   * ()--------(x2,y2)
   *           (2,3)
   *
   * (0,1)
   * (x1,y1)--------()
   */
  if (
    rec1[2] <= rec2[0] ||
    rec1[0] >= rec2[2] ||
    rec1[1] >= rec2[3] ||
    rec1[3] <= rec2[1]
  ) {
    return false;
  } else {
    return true;
  }
};
// @lc code=end
