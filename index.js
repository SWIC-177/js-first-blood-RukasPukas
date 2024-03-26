/*const name = "Luke Tyon";
const age = 100;

function verifyAdulthood(name, age) {
  if (age >= 18) {
    return `Welcome ${name}!`;
  }
  return `You are not old enough to enter ${name}`;
}
console.log(verifyAdulthood(name, age));
*/

const person = {
  name: "John",
  age: 18,
};

function verifyAdulthood(personName, personAge) {
  if (personAge >= 18) return `Welcome, ${personName}!`;

  return `You are not old enough to enter, ${personName}.`;
}

const adultMessage = verifyAdulthood(person.name, person.age);

console.log(adultMessage);
