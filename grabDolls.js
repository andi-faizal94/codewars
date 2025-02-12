function grabDoll(dolls) {
  var bag = [];
  for (var i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      if (bag?.length === 3) {
        break;
      }
      bag.push(dolls[i]);
      continue;
    }
  }
  return bag;
}

// grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]);
grabDoll([
  "Mickey Mouse",
  "Barbie doll",
  "Hello Kitty",
  "Hello Kitty",
  "Hello Kitty",
  "Snow white",
]);
