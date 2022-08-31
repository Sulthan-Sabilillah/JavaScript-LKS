function div(a, b) {
  if (b === 0) {
    throw new SyntaxError("Second Parameter can't be zero");
  }
  return a / b;
}

console.log(div(4, 0));
