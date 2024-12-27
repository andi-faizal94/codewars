function past(h, m, s) {
  //#Happy Coding! ^_^

  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (h) {
    hours += h * 60 * 60 * 1000;
  }

  if (m) {
    minutes += m * 60 * 1000;
  }

  if (s) {
    seconds += s * 1000;
  }

  console.log(hours + minutes + seconds);
  return hours + minutes + seconds;
}

past(0, 1, 1);
past(1, 1, 1);
