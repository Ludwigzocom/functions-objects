//Objects

const person = {
  name: "Pelle",
  age: 18,
  likesFotball: true,
  hobbies: ["pingis", "glass", "dansa"],
  describe: function () {
    console.log("Mina hobbies");
    for (const hobbie of this.hobbies) {
      console.log(hobbie);
    }
  },
};

person.hobbies.push("curling");

person.dogName = "Bamse!";

console.log(person.likesFotball);
person.describe();
console.log(person.dogName);

const car = {
  color: "röd",
  speed: "323khm",
  brand: "BMW",
  model: "750 li",
  vroom: function () {
    console.log("vroooooom at " + this.speed);
  },
};
car.vroom();
console.log(car.color.length);
console.log(car.brand.toLowerCase());
