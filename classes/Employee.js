class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.#salary = salary;
      this.#isHired = true;
      Employee.#allEmployees.push(this);
    }
  
    #salary;
    #isHired;
    static #allEmployees = [];
  
    getSalary() {
      return this.#salary;
    }
  
    setSalary(amount) {
      this.#salary = amount;
    }
  
    getStatus() {
      return this.#isHired;
    }
  
    setStatus(command) {
      if (command === "hire") {
        this.#isHired = true;
      } else if (command === "fire") {
        this.#isHired = false;
      }
    }
  
    static getEmployees() {
      return Employee.#allEmployees;
    }
  
    static getTotalPayroll() {
      return Employee.#allEmployees.reduce((total, employee) => {
        if (employee.getStatus()) {
          return total + employee.getSalary();
        }
        return total;
      }, 0);
    }
  }
  
  
module.exports = {
    Employee,
}
