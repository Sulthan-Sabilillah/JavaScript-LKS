const numbers = [12, 13, 14, 17, 18];

numbers.unshift(9, 10, 11);
numbers.push(19, 20, 21);
numbers.splice(3, 0, 15, 16);
console.log(numbers);
