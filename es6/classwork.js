let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = arr.reduce((prev, prev) => {
  console.log(prev, curr);
  return prev + curr;
}, 0);

let filtered = arr.filter((item) => item % 2 !== 0); //убрать четные

class MyString {
  reverse(str) {
    return str.split("").reverse().join("");
  }

  ucFirst(str) {
    let strArr = str.split("");
    let capitalizedArr = strArr.map((item, index) => {
      if (index === 0) {
        return item.toUpperCase();
      }

      return item;
    });

    return capitalizedArr.join("");
  }
}

function Person(age, weight) {
  this.age = age;
  this.weight = weight;
}

Person.prototype.getInfo = function () {
  return "I am " + this.age + " years old " + "and weighs " + this.weight + " kilo.";
};

let peter = new Person(28, 75);
let peter1 = new Person(28, 75);
let peter2 = new Person(28, 75);
let peter3 = new Person(28, 75);

console.log(peter);

class Person {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  getInfo() {
    return "I am " + this.age + " years old " + "and weighs " + this.weight + " kilo.";
  }
}

class Employee extends Person {
  constructor(age, weight, salary) {
    super(age, weight);
    this.salary = salary;
  }

  getInfo() {
    return (
      "I am " +
      this.age +
      " years old " +
      "and weighs " +
      this.weight +
      " kilo " +
      "and earns " +
      this.salary +
      " dollar."
    );
  }
}

let employee = new Employee(12, 12, 12);
employee.toString();

class User {
  constructor(name, lastName, email) {
    this.name = name;
    this.lastName = lastName;
    this._email = email;
  }

  getFullName() {
    return this.name + " " + this.lastName;
  }

  get email() {
    return this._email;
  }

  set email(emailValue) {
    if (emailValue.indexOf("@") !== -1) {
      this._email = emailValue;
    }
  }

  setName(name) {
    if (name === "") {
      return;
    }

    this.name = name;
  }
}

let user = new User("Vasya", "Spilberg", "vs@gmail.com");

user.setName("Pet");

user.email = "ps@gmail.com";
