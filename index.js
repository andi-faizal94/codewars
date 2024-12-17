function reverseWords(str) {
  let helper = str.split(" ").reverse();
  return helper.join(" ");
}

console.log(reverseWords("hello world!"));
