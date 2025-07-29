function sumMix(x) {
  const initialValue = 0;
  const sumWithInitial = x.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue),
    initialValue
  );

  return sumWithInitial;
}

sumMix([9, 3, "7", "3"]);
