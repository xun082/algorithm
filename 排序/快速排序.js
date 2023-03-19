// 分区操作
const partition = (array, left, right) => {
  let pivot = left; //设定基准值
  let index = pivot + 1;

  for (let i = index; i <= right; i++) {
    if (array[i] < array[pivot]) {
      swap(array, i, index);
      index++;
    }
  }

  swap(array, pivot, index - 1);

  return index - 1;
};

// 快速排序
const quickSort = (array, left = 0, right = array.length - 1) => {
  let partitionIndex = null;

  if (left < right) {
    partitionIndex = partition(array, left, right);

    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }

  return array;
};

const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
};

const other = (array) => {
  if (array.length <= 1) return array;

  // 取基准点
  const midIndex = Math.floor(array.length / 2);
  // 取基准点的值,splice(index,1) 则返回的是含有被删除的元素的数组
  const valArr = array.splice(midIndex, 1);

  const midIndexVal = valArr[0];

  const left = []; //存放比基准点小的数组
  const right = []; //存放比基准点大的数组

  // 遍历数组,进行判断分配
  for (let i = 0; i < array.length; i++) {
    if (array[i] < midIndexVal) left.push(array[i]); //比基准点小的放在左边数组
    else right.push(array[i]); //比基准点大的放在右边数组
  }

  // 递归执行以上操作,对左右两个数组进行操作,知道数组长度为 <= 1

  return other(left).concat(midIndexVal, other(right));
};

const array = [1, 20, 31, 58, 46, 5, 6, 7, 21, 32, 44, 59];
console.time("s");
console.log(...quickSort(array));
console.timeEnd("s");
