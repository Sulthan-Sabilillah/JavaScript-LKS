const user = {
  nama: "Sulthan",
  umur: 17,
  favBook: {
    bookname: "The Blues Whales",
    bookauthor: "xyz",
  },
};

const { nama, umur, favBook } = user;
const { bookname, bookauthor } = favBook;

console.log(nama);
console.log(umur);
console.log(bookname);
console.log(bookauthor);
