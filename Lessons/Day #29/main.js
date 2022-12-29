// class Animal {
//   sounds;
//   constructor() {
//     this.legs = 4;
//     this.ears = 2;
//   }
// }

// class Dog extends Animal {
//   constructor() {
//     super();
//     this.sounds = "woof woof";
//   }
// }

// console.log(new Dog());

// class Person {
//   name;
//   age;
//   gender;
//   height;
//   weight;
//   constructor() {}
// }

// class student extends Person {
//   constructor() {
//     super();
//     this.name = "Unkownable";
//     this.age = "Null";
//     this.gender = "Random";
//     this.height = "170cm";
//     this.weight = "200kg";
//   }
// }

// console.log(new student());

class Student {
  constructor(Name, BirthYear, Weight, Height) {
    this.Name = Name;
    this.BirthYear = BirthYear;
    this.Weight = Weight;
    this.Height = Height;
  }

  getBMI() {
    return this.Weight / this.Height ** 2;
  }

  getAge() {
    return new Date().getFullYear - this.BirthYear;
  }
}

const generateNumber = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};

const thisYear = new Date().getFullYear();
const Students = [];

for (let i = 0; i < 20; i++) {
  const student = new Student(
    "Student " + i,
    generateNumber(1970, thisYear),
    generateNumber(40, 120),
    generateNumber(155, 190)
  );
  Students.push(student);
}

console.log(Students);

let avarageBMI;
let avarageAge;
let studentWithMaxBMI;
let studentWithMinBMI;
let youngest;
let oldest;
