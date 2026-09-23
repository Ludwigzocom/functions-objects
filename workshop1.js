function greet(name) {
  console.log("Hello " + name + "!");
}
greet("David");
greet("Billy");
greet("Sanna");

function add(a, b) {
  return a + b;
}

const num1 = add(5, 10);
const num2 = add(100, 150);
console.log(num1);
console.log(num2);

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

console.log(isEven(4));

function square(number) {
  return number * number;
}

console.log(square(5));

function describeAge(age) {
  if (age < 13) {
    return "barn";
  } else if (age > 12 && age < 20) {
    return "tonåring";
  } else if (age > 19) {
    return 12;
  }
}

function describeAge2(age) {
  if (age < 13) {
    console.log("barn");
  } else if (age < 20) {
    console.log("tonåring");
  } else if (age > 19) {
    console.log("vuxen");
  }
}

console.log(describeAge(20));
console.log(typeof describeAge(25));

function calculateTotal(price, quantity, discount) {
  const totalValue = price * quantity;
  if (totalValue >= 500) {
    console.log("Discount reached");
    return totalValue * discount;
  }
  return totalValue;
}

console.log(calculateTotal(225, 3, 0.7));

function returnFive() {
  return 5;
}

console.log(returnFive());

console.log(calculateTotal("500", 2, true));

const add2 = (a, b) => a + b;

console.log(add2);
