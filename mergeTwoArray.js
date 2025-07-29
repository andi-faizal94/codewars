function mergeArrays(arr1, arr2) {
  if (arr1.length <= 0 && arr2.length <= 0) {
    return [];
  }

  const array1 = arr1.sort(function (a, b) {
    return a - b;
  });

  const array2 = arr2.sort(function (a, b) {
    return a - b;
  });

  const arraymerged = array1.concat(array2);
  const a = arraymerged.sort(function (a, b) {
    return a - b;
  });

  const b = [...new Set(a)];

  return b;
}

mergeArrays(
  [1, 3, 5, 7, 9, 11, 12],
  [1, 2, 3, 4, 5, 10, 12],
  [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
);
