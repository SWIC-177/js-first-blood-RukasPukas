/*const name = "John Doe"; // here the const name is declared with its value
let otherName = name; // here the let is declared with its value being that of name

console.log(`Name is: ${name}`); //here output the name of the const value
console.log(`Other name is: ${otherName}`); // here output the name of the let value

otherName = "Jane Doe"; // here the value of the let is reassigned

console.log(`Name is: ${name}`); // here the ouput of the const is output
console.log(`Other name is: ${otherName}`); // here the output of the newly assigned let is put out

otherName = 23; // here the let is reassigned a value again of a numeric 23
console.log(`Name is: ${name}`); // here the const output is called again
console.log(`Other name is: ${otherName}`); //here the final assignment value is called for the let's to be displayed in the console.
*/

/*const younger1 = 13; //const is declared with the value of 13
let younger2 = younger1; //let is declared with the same value of the const

function incrementAge(age) {
  // function is declared using the argument of age
  return age + 1; // im assuming since age was not defined it was undefined before this point then since all we did was add 1 it assumes the value is 1
}

younger2 = incrementAge(younger2); // here you are adding the returned argument age and adding it to the value of younger 2

console.log(`Younger1 is: ${younger1}`); // younger1 is 13 as established in the const
console.log(`Younger2 is: ${younger2}`); // younger2 is 14 taking the value of younger1 + age*/

const person = {
  name: "John Doe",
  age: 23,
};

const updatePersonName = (p, newName) => ({
  ...p,
  name: newName,
  hobbies: ["reading", "writing"],
});

const updatedPerson = updatePersonName(person, "Jane Doe");

console.log(updatedPerson);
