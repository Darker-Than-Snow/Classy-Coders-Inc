const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, position, department) {
    super(name, position);
    this.department = department;
    this.#employeesManaged = [];
  }

  #employeesManaged;

  getEmployeesManaged() {
    return this.#employeesManaged;
  }

  addEmployeeManaged(employee) {
    this.#employeesManaged.push(employee);
  }
}

module.exports = {
    Manager,
}