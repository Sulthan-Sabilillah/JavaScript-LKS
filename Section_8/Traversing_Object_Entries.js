const user = {
  nama: "Sulthan",
  umur: 17,
  gender: "Pria",
  nomer: "34343434",
  email: "Sulthan@gmail.com",
};

for (let key in user) {
  console.log(key, user[key]);
}

console.log(Object.keys(user));
console.log(Object.values(user));

for (let val of Object.values(user)) {
  console.log(val);
}
