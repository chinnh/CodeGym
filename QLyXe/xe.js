class Xe {
  car;
  listCar;
  constructor(carInput) {
    this.car = carInput;
    this.listCar = [];
  }
  addCar(newCar) {
    this.listCar.push(newCar);
  }
  removeCar(index) {
    this.listCar.splice(index, 1);
  }

  getOneCar(index) {
    let product = this.listCar[index];
    return product;
  }

  update(index, newCar) {
    this.listCar[index] = newCar;
  }
}
