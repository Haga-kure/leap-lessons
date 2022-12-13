const student = {
  lastName: "Odgerel",
  firstName: "Sed-Erdene",
  age: 17,
  hobby: "Video games",
};
console.log(
  `${student.lastName} ovogtoi ${student.firstName} n ${student.age} nastai`
);
const studentCopy = { ...student };
studentCopy.age = 22;
console.log(student["age"]);
console.log(studentCopy.age);
const data = [
  { gender: "M", firstName: "Dorj", lastName: " Bat", point: 95, age: 19 },
  { gender: "F", firstName: "Cornona", lastName: "Bataa", point: 57, age: 22 },
  { gender: "F", firstName: "Tiger", lastName: "Suvd", point: 99, age: 33 },
  { gender: "M", firstName: "Heniken", lastName: "Ganaa", point: 58, age: 41 },
  { gender: "M", firstName: "Golden", lastName: "Gobi", point: 57, age: 23 },
  { gender: "F", firstName: "Sengvr", lastName: "Amir", point: 76, age: 54 },
  { gender: "M", firstName: "Ub ", lastName: " Hero", point: 87, age: 31 },
  { gender: "M", firstName: "Nergui", lastName: "Niislel", point: 88, age: 27 },
  { gender: "F", firstName: "Xaraa", lastName: "dorjoo", point: 68, age: 31 },
  { gender: "F", firstName: "Une", lastName: "Aagi", point: 87, age: 25 },
];
function GetCountByGender(list, gender) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].gender === gender) {
      count++;
    }
  }
  return count;
}

const FemaleCount = GetCountByGender(data, "F");
const MaleCount = GetCountByGender(data, "M");
console.log(`niit ${FemaleCount} emegtei ${MaleCount} eregtei baina`);

function GetCountByAgeRange(list, min, max) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].age > min && list[i].age < max) {
      count++;
    }
  }
  return count;
}

// const childrenCount = GetCountByAgeRange(data, 0, 17);
// const young = GetCountByAgeRange(data, 18, 23);
// const men = GetCountByAgeRange(data, 23, 30);
// const adult = GetCountByAgeRange(data, 30, 55);
// const elder = GetCountByAgeRange(data, 55, 200);
// console.log(
//   `Niit ${childrenCount} huuhed ${young}\n zaluuchuud ${men}\n erchud ${adult}\n dundaj nasnii ${elder} hogshin humuus baina aa`
// );

function GetCountByValueRange(point, min, max) {
  let count = 0;
  for (let i = 0; i < point.length; i++) {
    if (point[i].point > min && point[i].point < max) {
      count++;
    }
  }
  return count;
}

const TotalA = GetCountByValueRange(data, 90, 100);
const TotalB = GetCountByValueRange(data, 80, 89);
const TotalC = GetCountByValueRange(data, 70, 79);
const TotalD = GetCountByValueRange(data, 60, 69);
const TotalF = GetCountByValueRange(data, 0, 55);
console.log(
  `Niit ${TotalA}-A ${TotalB}-B ${TotalC}-C ${TotalD}-D ${TotalF}-F baina`
);

function GetCountBy(gender, firstName, lastName, age, point) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].gender === gender) {
      count++;
    }
  }
  return count;
}

const childrenCount = GetCountByAgeRange(data, 0, 17);
const young = GetCountByAgeRange(data, 18, 23);
const men = GetCountByAgeRange(data, 23, 30);
const adult = GetCountByAgeRange(data, 30, 55);
const elder = GetCountByAgeRange(data, 55, 200);
console.log(
  `Niit ${childrenCount} huuhed ${young}\n zaluuchuud ${men}\n erchud ${adult}\n dundaj nasnii ${elder} hogshin humuus baina aa`
);
