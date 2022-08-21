const sort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j >= 1 && array[j] < array[j - 1]) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
    }
  }
  return array;
};
