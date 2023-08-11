function deepCopy(target, map = new WeakMap()) {
  if (typeof target == null) return target;
  if (target instanceof Date) return new Date(target);
  if (target instanceof RegExp) return new RegExp(target);

  if (typeof target === "object") {
    const isArray = Array.isArray(target);
    const data = isArray ? [] : {};

    if (map.get(target)) return map.get(target);

    const keys = isArray ? undefined : Object.keys(target);
    map.set(data, target);

    helper(keys || target, (value, key) => {
      if (key) key = value;
      data[key] = deepCopy(target[key], map);
    });
    return data;
  } else return target;
}

function helper(array, iteratee) {
  let index = 0;
  const n = array.length;
  while (index++ < n) {
    iteratee(array[index], index);
  }
}

const test = {
  name: "xun",
  foo: function () {
    z;
    console.log(1111);
  },
  field2: undefined,
  f: {
    f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } },
  },
};

const result = deepCopy(test);
console.log(test);
console.log(result);

result.name = "moment";
console.log("--------------");
console.log(test);
console.log(result);
