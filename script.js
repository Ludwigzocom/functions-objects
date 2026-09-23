console.log("hallå hallå");

//Arrayer

const listOfNames = ["Billy", "Bob", "James", "Michael"];

const listOfThings = [123, "hello hello", true];

console.log(listOfNames);
console.log(listOfNames[0]);

//Skriva ut lister med hjälp av loopar

//for of - loop
for (const name of listOfNames) {
  console.log(name);
}
console.log("==================");

//for loop
for (let i = 0; i < listOfNames.length; i++) {
  console.log(i + 1 + ". " + listOfNames[i]);
}

//while loop kollar condition sedan kör if true

let counter = 0;
let whileGameIsOn = true;
while (counter < 20) {
  console.log(counter);
  counter++;
}

// do while kör alltid minst en gång, sedan kollar condition

do {} while (false);
