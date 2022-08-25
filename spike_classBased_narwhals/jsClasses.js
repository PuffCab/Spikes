class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  show() {
    return `my car is a ${this.brand}`;
  }
}

let emilyCar = new Car("toyota", "red");
// let albertoCar = new Car("Mercedes");
// console.log("albertoCar", albertoCar.show());
console.log("emilyCar :>> ", emilyCar);
// console.log(emilyCar.show());

class Model extends Car {
  constructor(brand, color, model) {
    super(brand, color);
    this.model = model;
  }
  showBrandAndModel() {
    return `${this.show()} and my fav model is ${this.model}`;
  }
}

let janCar = new Model("Saab", "red", "900");
console.log(janCar);
console.log(janCar.show());
