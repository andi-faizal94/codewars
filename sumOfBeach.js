function sumOfABeach(beach) {
  const allWords = beach.toLowerCase();
  const words = ["sand", "water", "fish", "sun"];

  let count = 0;

  for (let word of words) {
    let matchWord = new RegExp(word, "g");

    const matches = allWords.match(matchWord);
    console.log(matches.length);
    count += matches ? matches.length : 0;
  }
  return count;
}

sumOfABeach(
  "weoqipurpoqwuirpousandiupqwoieurioweuwateruierqpoiweurpouifiShqowieuqpwoeuisUn"
);
