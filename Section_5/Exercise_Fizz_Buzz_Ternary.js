let number = 10;

console.log(
  number % 3 === 0 && number % 5 === 0
    ? "Fizzbuzz"
    : number % 3 === 0
    ? "Fizz"
    : number % 5 === 0
    ? "Buzz"
    : "Nothing"
);
