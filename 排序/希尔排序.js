const sort = (array) => {
  const length = array.length;

  if (length < 2) return array;

  let gap = Math.floor(length / 2);

  while (gap > 0) {
    for (let i = gap; i < length; i++) {
      let j = i;
      let current = array[i];

      while (j >= 0 && current < array[j - gap]) {
        array[j] = array[j - gap];
        j -= gap;
      }

      array[j] = current;
    }
    gap = Math.floor(gap / 2);
  }

  return array;
};

const array = [5, 8, 7, 10, 6, 9, 15, 1, 3];
console.time("s");
console.log(...sort(array));
console.timeEnd("s");
