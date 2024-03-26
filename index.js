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

/*const person = {
  name: "John",
  age: 18,
};

function verifyAdulthood(personName, personAge) {
  if (personAge >= 18) return `Welcome, ${personName}!`;

  return `You are not old enough to enter, ${personName}.`;
}

const adultMessage = verifyAdulthood(person.name, person.age);

console.log(adultMessage);
*/
const people = [
  {
    name: "John",
    age: 17,
  },
  {
    name: "Jane",
    age: 20,
  },
  {
    name: "Mary",
    age: 25,
  },
  {
    name: "Peter",
    age: 30,
  },
  {
    name: "Paul",
    age: 35,
  },
];

function verifyAdulthood(personName, personAge) {
  if (personAge >= 18) return `Welcome, ${personName}!`;

  return `You are not old enough to enter, ${personName}.`;
}
for (let i = 0; i < people.length; i++) {
  const person = people[i];
  console.log(verifyAdulthood(person.name, person.age));
}
