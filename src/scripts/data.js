// DATA

// using class constructor since we need different objects with same keys
class salary {
  constructor(benefits, targetBonus, signOnBonus, equity, baseSalary) {
    this.benefits = benefits;
    this.targetBonus = targetBonus;
    this.signOnBonus = signOnBonus;
    this.equity = equity;
    this.baseSalary = baseSalary;
    this.total = Array.prototype.reduce.call(
      arguments,
      (x, y) => x + y,
      0,
    );
  }
}

// using object of objects (and not array of objects) so that we can pick values corresponding
// to an year directly without iterating
export const data = {
  "year1": new salary(20400, 3000, 10000, 47500, 100000),
  "year2": new salary(21900, 3500, 0, 47500, 120000),
  "year3": new salary(23000, 3700, 0, 57500, 130000),
  "year4": new salary(27500, 5950, 0, 67500, 140000),
};
