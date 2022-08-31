const salaries = {
  sulthan: 3000,
  rafif: 4000,
  hilal: 5000,
  yanto: 7000,
  luki: 10000,
};

let sum = 0;

// for (let key in salaries) {
//   console.log(key.salaries[key]);
//   sum = sum + salaries[key];
//   sum += salaries[key];
// }
// console.log(sum);

console.log(Object.values(salaries));

for (let val of Object.values(salaries)) {
  sum += val;
}
console.log(sum);
