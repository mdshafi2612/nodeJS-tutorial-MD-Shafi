//Now we will be taking about the module that we can use to handle filesystem
//the module is "fs" module
//There are two flavors of the "fs" module
//1) Asynchronous non-blocking and
//2) Synchronous blockcing --> Asynchronous version is better
//-------------------SYnchronous blocking methods---------------
//We will destructure the methods of the "fs" module
// const file = require("fs");
// console.log(file);
const { readFileSync, writeFileSync } = require("fs");

//In the readFileSync method, we need to provide two arguments,
//the first one is the path of the file that we want to read
//the second one is the encoding format so that node knows how to decode it
//Normally we use the "utf-8" encoding format
console.log("Start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, "\n", second);

//-----------writeFileSync------------
//This method expects two argument, the first one is the
//file that i want to write, and the second one is the data
//If the file is not present, it will create a new file
//Otherwise, if the file is already present, it will override the whole
///content of the file
//There is also the option of appending to the file,
//we need to pass the flag: 'a' as an object in the 3rd argument
// writeFileSync(
//   "./content/result-sync.txt"
//   `Hello there: ${first} and ${second}`
// );

//----------appending content---------
writeFileSync(
  "./content/result-sync.txt",
  `Hello there: ${first} and ${second}`,
  { flag: "a" }
);
console.log("Done with this task");
console.log("starting the next one");
//Synchronous blockcing, it will execute each line of the code step by step
//So, in an application of 10 users, if one user is taking too long for reading and writing
//the file, all the other 9 users can not get the service. This will break down
//the app functionality, But it does not happen for the asynchronous case
