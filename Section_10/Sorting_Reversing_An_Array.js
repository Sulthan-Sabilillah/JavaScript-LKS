const numbers = [6, 8, 7, 2, 1, 9];

numbers.sort();
numbers.reverse();

console.log(numbers);

let doctors = [
  { name: "Sulthan", age: 17 },
  { name: "Sabilillah", age: 27 },
];

doctors
  .sort(function (d1, d2) {
    if (d1.age > d2.age) return +1;
    if (d1.age === d2.age) return 0;
    if (d1.age < d2.age) return -1;
  })
  .reverse();

console.log(doctors);
