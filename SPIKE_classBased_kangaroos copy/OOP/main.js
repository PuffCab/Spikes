class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  show() {
    return `My Car is of brand ${this.brand} from  ${this.year}`;
  }
}
const myArray = ["asdasd"];
console.log("myArray", myArray);
const doronCar = new Car("Tesla", 2023);

console.log("doronCar", doronCar);
console.log("doronCar.show()", doronCar.show());

class Model extends Car {
  constructor(brand, year, modelName) {
    super(brand, year);
    this.modelName = modelName;
  }

  showBrandAndModel() {
    return `${this.show()} and the model name is ${this.modelName}`;
  }
}

const pabloCar = new Model("mini", 2010, "cooper");
console.log("pabloCar", pabloCar);
console.log("pabloCar.showBrandAndModel(", pabloCar.showBrandAndModel());
