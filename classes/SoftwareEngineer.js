const Employee = require('./Employee');

class SoftwareEngineer extends Employee {
  constructor(name, position) {
    super(name, position);
    this.#programmingLanguages = [];
  }

  #programmingLanguages;

  getProgrammingLanguages() {
    return this.#programmingLanguages;
  }

  setProgrammingLanguage(language) {
    this.#programmingLanguages.push(language);
  }
}


module.exports = {
    SoftwareEngineer,
}