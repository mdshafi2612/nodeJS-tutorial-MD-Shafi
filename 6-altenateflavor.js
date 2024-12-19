//Directly exporting module, since
//module.exports is an object, so we are just attaching the proprty and its value
//to that object
module.exports.items = ["item 1", "item 2"];

const person = {
  name: "bob",
  age: 35,
};

module.exports.singlePerson = person;
