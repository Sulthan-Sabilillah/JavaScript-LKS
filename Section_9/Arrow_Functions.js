// Default Parameters

function calcSum(number1, number2) {
  let sum = number1 + number2;
  return sum;
}
console.log(calcSum(10, 50));

// Function Expression

const calSumExp = function (number1, number2) {
  let sum = number1 + number2;
  return sum;
};
console.log(calSumExp(50, 70));

// Arrow Function

const calSumArr = (number1, number2) => number1 + number2;
console.log(calSumArr(40, 30));

// Function Expression

const mulByTwo = function (number1) {
  return number1 * 2;
};
console.log(mulByTwo(6));

// Arrow Function
const mulByTwoArr = (number1) => number1 * 2;
console.log(mulByTwoArr(9));
