function solution(string) {
  if (string.length <= 0) return "";
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}

solution("camelCasing");
