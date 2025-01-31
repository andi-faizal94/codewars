const quarterOf = (month) => {
  if (month < 1 || month > 12) {
    return;
  }
  return Math.ceil(month / 3);
};
