const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(...numbers);
console.log(numbers[0], numbers[1]);
console.log(numbers);

const arrayCopy =  [...numbers];
console.log(arrayCopy);

const num1 = [1,2,3];
const num2 = [4,5,6];

const num = [...num1, ...num2];
console.log(num)