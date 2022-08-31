const nuumbers = [1, 2, 3, 4, 5];

for (let index = 0; index < nuumbers.length; index++) {
  console.log(index, nuumbers[index]);
}

for (let num of nuumbers) {
  console.log(num);
}

nuumbers.forEach(function (num, index) {
  console.log(num, index);
});
