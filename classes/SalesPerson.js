const Employee = require('./Employee');

class SalesPerson extends Employee {
  constructor(name, position) {
    super(name, position);
    this.clients = [];
    this.#totalSales = 0;
  }

  #totalSales;

  getSalesNumbers() {
    return this.#totalSales;
  }

  makeSale(amount) {
    this.#totalSales += amount;
  }
}

module.exports = {
    SalesPerson,
}