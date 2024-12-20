function abbrevName(name) {
  let helper;
  const allWords = name.split(" ");
  for (let word = 0; word < allWords.length; word++) {
    helper =
      allWords[0].charAt(0).toUpperCase() +
      "." +
      allWords[1].charAt(0).toUpperCase();
  }
  return helper;
}
abbrevName("Patrick Feenan");
