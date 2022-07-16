class Car {
  constructor(brand) {
    this.brand = brand;
  }

  showBrand() {
    return `My car is ${this.brand}`;
  }
}

let myCar = new Car("mini");
console.log("myCar :>> ", myCar);
console.log(myCar.showBrand());

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  showBrandModel() {
    return `${this.showBrand()} and the model is ${this.model}`;
  }
}
let myOtherCar = new Model("bmw", "X5");
console.log(myOtherCar.showBrandModel());
