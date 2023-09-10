function PersonDetails(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;

  let genNumber;

  let SSN_No;

  this.say_Helllo = function () {
    console.log(`Hey@ hi!!! this is ${this.name}`);
  };

  Object.defineProperty(this, "SSN_No", {
    set: function (value) {
      SSN_No = value;
    },
    get: function () {
      return SSN_No;
    },
  });

  Object.defineProperty(this, "genNumber", {
    set: function (value) {
      genNumber = "MK" + value + "XX12FG3";
    },
    get: function () {
      return genNumber;
    },
  });
}

const employee = new PersonDetails("Kalyan", 24, "6.2");

console.log(employee);

employee.SSN_No = "2314-3411-098";

console.log(employee.SSN_No);

employee.say_Helllo();

PersonDetails.prototype.creditNumber = function (value) {
  this.genNumber = value;
};

employee.creditNumber(150458);

console.log(employee.genNumber);
