//Now we will be taking about the module that we can use to handle filesystem
//the module is "fs" module
//There are two flavors of the "fs" module
//1) Asynchronous non-blocking and
//2) Synchronous blockcing --> Asynchronous version is better
//-------------------Asynchronous non-blocking methods---------------
//We will destructure the methods of the "fs" module
// const file = require("fs");
// console.log(file);
const { readFile, writeFile } = require("fs");
//In the asynchronous "readfile" method, we need to pass two arguments
//The first one is the filepath and the second one is the callback function
//callback function is invoked when some event has occured like when we click a button
//the button's addEventListener callback function is invoked and executed
// The callback function expects two arguments, the error and the result of the operation
//after the callback is executed
console.log("Start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //Else the callback is successfully executed and we process the result
  // console.log(result);
  //   ubuntu2204@ubuntu2204-Presario-CQ43-Notebook-PC:~/Node JS and Express JS Tutorial/Tutorial$ node app.js
  // <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
  //We get a buffer, because we do not pass the encoding format,so we pass 'utf8' as the 2nd argument
  //Now we will do the same as the sync version,
  //read the second text file and then write the content of the first and second file
  //in a new file
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Hello there: ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // console.log(result);
        console.log("Done with the task");
      }
    );
  });
});

console.log("Starting the next task");

//We can easily see that the code turns out to be a "callback hell"
//ofcourse there are better ways to handle this
//---------------Output-------------
// Start
// Starting the next task
// Done with the task
//-----------------------------
//So, the asynchronous approach after starting the task of reading a file,
//it offload the task, and continues with the next task, ao it can handle
//multiple users concurrently as should be the case

//-------To prevent callback hell, we will use "promises" and "async-await"
//async-await is the best option
