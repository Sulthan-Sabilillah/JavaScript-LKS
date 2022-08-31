const user = {
  nama: "Sulthan",
  umur: 17,
};

// const copiedUser = {};
// copiedUser.nama = user.nama;
// copiedUser.umur = user.umur;

// for(let key in user){
//     console.log(key.user[key]);
//     copiedUser[key] = user[ley];
// }

const copiedUser = Object.assign({}, user);

console.log(copiedUser);
