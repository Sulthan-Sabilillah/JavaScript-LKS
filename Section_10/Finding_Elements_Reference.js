const doctors = [
  { name: "Sulthan", age: 17 },
  { name: "Rafif", age: 27 },
  { name: "Hilal", age: 37 },
];

const result = doctors.find(function (doctor) {
  return doctor.age > 25;
});

console.log(result);
