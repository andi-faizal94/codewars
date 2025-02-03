const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const result = distanceToPump / mpg;
  if (result <= fuelLeft) {
    return true;
  }
  return false;
};

console.log(zeroFuel(100, 50, 1));
