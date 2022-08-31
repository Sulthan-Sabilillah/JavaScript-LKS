const user = {
  nama: "Sulthan",
  umur: 17,
  isMarried: false,
  teman: ["Rafif", "Hilal"],
  selectColor: null,
  calculateAge: function () {
    console.log("I am ${this.umur} Sulthan Sabilillah");
  },
};

user.calculateAge();
