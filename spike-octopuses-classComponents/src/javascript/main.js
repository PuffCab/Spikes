class Car {
  constructor(brand) {
    this.brand = brand;
  }
  show() {
    return `My favorite car is ${this.brand}`;
  }
}

const myCar = new Car("mini");
console.log(myCar);

const dicksonCar = new Car("Mercedes");
console.log(dicksonCar.show());

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  showBrandAndModel() {
    return `${this.show()} and my fav model is ${this.model}`;
  }
}

const silviaFavCar = new Model("trabi", "two doors");
console.log("silviaFavCar :>> ", silviaFavCar.showBrandAndModel());
