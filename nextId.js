function nextId(ids) {
  const set = new Set(ids);
  console.log(set);
  let i = 0;

  while (set.has(i)) {
    console.log({ i });
    i++;
  }
  console.log({ i }, "ini");

  return i;
}

nextId([0, 1, 2, 3, 5]);
