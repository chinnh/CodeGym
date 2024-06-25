class Store {
  name;
  listProduct;
  constructor(nameInput) {
    this.name = nameInput;
    this.listProduct = [];
  }
  addProduct(newProduct) {
    this.listProduct.push(newProduct);
  }
  removeProduct(index) {
    this.listProduct.splice(index, 1);
  }
  getOneProduct(index) {
    let product = this.listProduct[index];
    return product;
  }
  update(index, newProduct) {
    this.listProduct[index] = newProduct;
  }
}
