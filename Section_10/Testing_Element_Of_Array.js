const angka = [6, 8, 7, -2, 1, 9];

const data = angka.some(function (num) {
  return num > 0;
});

console.log(data);
