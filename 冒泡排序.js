const sort = (array) => {
  let isSwap = false;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSwap = true;
      }
    }
    if (isSwap === false) {
      // 如果一轮比较重没有发生过变换，则立即停止排序，因为此时剩余的数字一定已经有序了
      break;
    }
  }

  return array;
};
