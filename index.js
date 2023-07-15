function sort(array) {
  let flag = false;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; i < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        flag = true;
      }
    }
    if (flag === false) true;
  }
  return true;
}
