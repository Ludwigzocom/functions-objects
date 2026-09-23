//

// console.log("hallå hallå");

// //Arrayer

// const listOfNames = ["Billy", "Bob", "James", "Michael"];

// const listOfThings = [123, "hello hello", true];

// console.log(listOfNames);
// console.log(listOfNames[0]);

// //Skriva ut lister med hjälp av loopar

// //for of - loop
// for (const name of listOfNames) {
//   console.log(name);
// }
// console.log("==================");

// //for loop
// let num = 0;
// for (let i = 0; i < listOfNames.length; i++) {
//   num++;
//   console.log(num + "counter...");

//   console.log(i + 1 + ". " + listOfNames[i]);
// }

// //while loop kollar condition sedan kör if true

// let counter = 0;
// let whileGameIsOn = true;
// while (counter < 20) {
//   console.log(counter);
//   counter++;
// }

// // do while kör alltid minst en gång, sedan kollar condition

// do {} while (false);

//

//Functions

function functionsName() {}

function hello() {
  console.log("Hejsan!");
  console.log("Allesammans!");
}

// hello();
// hello();
// hello();

//Tar emot en parameter
function helloPerson(namn) {
  return "Hello " + namn + "!";
}
//Skriver ut returvärdet
console.log(helloPerson("billy"));

//Anger ett argument
helloPerson("Pelle");
helloPerson("Maria");
helloPerson("David");

//Tilldelar variablen returvärdet
const helloVariable = helloPerson("michael");

console.log(helloPerson("Tommy"));

//Skriver ut variablen med värdet
console.log(helloVariable);

function addNumbers(value1, value2, value3) {
  console.log(value1 + value2 + value3);
  return value1 + value2 + value3;
}

addNumbers(12, 123, 5);

const sumOfNumbers = addNumbers(100, 123, 50);

console.log(sumOfNumbers);

function checkAge(age) {
  if (age > 17) {
    console.log("Person is 18 or older");
    return true;
  } else {
    console.log("Person is under 18");
    return false;
  }
}

checkAge(18);
const isOld = checkAge(16);
console.log(isOld);

function information(personAge) {
  if (checkAge(personAge)) {
    console.log("Dagens agenda...");
    console.log("idag spelar tommy");
  } else {
    console.log("Sorry, du får inte komma in");
  }
}

information(23);
