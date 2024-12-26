function averageSquaredDifference(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays must be of equal length");
  }

  const total = arr1.reduce((sum, val, index) => {
    const difference = val - arr2[index];
    return sum + Math.pow(Math.abs(difference), 2);
  }, 0);

  return total / arr1.length;
}

averageSquaredDifference([1, 2, 3], [4, 5, 6]);
