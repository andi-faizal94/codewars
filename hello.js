function hello(name) {
  let names;
  let allName;

  if (name !== "" || name !== undefined || !name) {
    names = name?.charAt(0).toUpperCase();
    allName = name?.slice(1).toLowerCase();
  }

  if (name === undefined || name === "") {
    return "Hello, World!";
  } else if (name !== "" || name !== undefined || !name) {
    return `Hello, ${names + allName}!`;
  }
}

console.log(hello());
