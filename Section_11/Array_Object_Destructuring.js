function greeting(user) {
  const { name, age, address } = user;
  const { long, lat } = address;
  console.log("Hello ${name} and ${age} form ${long}, ${lat}");
}

const user = {
  name: "Sulthan",
  age: 17,
  address: {
    long: 323.323,
    lat: 2312.12,
  },
};

greeting(user);

let [a, b, c, d] = [1, 2, 3, 4];
console.log(a, b, c, d);
