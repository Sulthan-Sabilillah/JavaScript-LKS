class Fruit {
  constructor(name) {
    this.name = name;
  }
  fol() {
    console.log(this.name + " Is too much nasty");
  }
  static jackfruite() {
    console.log("jackfruite is very popular Fruite");
  }
}

let add = new Fruit("Mango");
add.fol();

Fruit.jackfruite();
