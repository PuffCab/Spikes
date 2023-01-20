// OOP  - OBJECT ORIENTED PROGRAMMING

class Car {
  constructor(brand) {
    this.brand = brand;
  }

  show() {
    return `My Car is a ${this.brand}`;
  }
}

const ercanCar = new Car("renault");

console.log("ercanCar", ercanCar.show());

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  showBrandAndModel() {
    return `${this.show()}, and the model is ${this.model}`;
  }
}

const canCar = new Model("toyota", "yaris");
console.log("canCAr :>> ", canCar.showBrandAndModel());
