function opposite(number) {
  if (number < 0) {
    return Math.abs(number);
  } else {
    return -parseFloat(number);
  }
}
opposite(1);
