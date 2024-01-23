// complete this js code
function Person(name, age) {
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the Person prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

}

function Employee(name, age, jobTitle) {
Person.call(this, name, age);

  // Add Employee-specific property
  this.jobTitle = jobTitle;
}

// Inherit Person prototype into Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Adding a method to the Employee prototype
Employee.prototype.jobGreet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};
const person = new Person("John", 25);
person.greet(); // Output: Hello, my name is John, I am 25 years old.

const employee = new Employee("Alice", 30, "Software Engineer");
employee.greet(); // Output: Hello, my name is Alice, I am 30 years old.
employee.jobGreet(); 

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
