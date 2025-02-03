function typeValidation(variable, type) {
  if (typeof variable == type) {
    return true;
  }

  return false;
}
console.log(typeValidation(42, "number"));
