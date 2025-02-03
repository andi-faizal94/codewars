const sumNested = (arr) => {
  return arr.reduce((sum, currentValue) => {
    // If currentValue is an array, recursively sum its elements
    if (Array.isArray(currentValue)) {
      return sum + sumNested(currentValue);
    }
    // Otherwise, add the number directly to the sum
    return sum + currentValue;
  }, 0);
};

console.log(sumNested([[1], []]));
