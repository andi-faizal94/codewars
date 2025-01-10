function findFunction(func, arr) {
  const anonymousFunction = func.find(
    (element) => typeof element === "function"
  );
  return arr.filter(anonymousFunction);
}
