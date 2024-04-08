// EMULATED CODE
function stateAge(age) {
  return `Your age is ${age}.`;
}

function secondaryFunction(age, func) {
  return func(age);
}

console.log(secondaryFunction("30", stateAge));

//second example
const me = {
  name: "Luke Tyon",
  age: 30,
  isConfused: true,
};

function createConfusionStatus(status) {
  return () => `${status}`;
}

const finalConfusion = createConfusionStatus(me.isConfused);
console.log(`Is ${me.name} confused? ${finalConfusion()}`);

// third example

const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(1, 2));

// fourth example

function incrementer(adder) {
  return (number) => number + adder;
}

const addOne = incrementer(1);
const addTwo = incrementer(2);
const addThree = incrementer(3);
const addSix = incrementer(6);
console.log(addThree(0));
