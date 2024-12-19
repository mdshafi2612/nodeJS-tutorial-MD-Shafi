const path = require("path");
//The path.sep module gives the platform specific seperator
console.log(path.sep);

//path.join() method concatenates multiples files to form an absolute path and returns
//the result as a normalized string. The argument passed must be in string format
//if I pass "/content/" instead of "/content", still it returns the normalized path
const filePath = path.join("/content/", "subfolder", "test.txt");

console.log(filePath);

//Instead of printing the the relative path. I need only
//the base which is the "test.txt" in this case. We can find it using the
//basename method
const base = path.basename(filePath);

console.log(base);

//If we need the absolute path, then we have the path.resolve() method for this
//__dirname is a global variable, which provides the path of the current directory
//Now we do we need absolute path ?
//Ans: When we run an application in our local machine, the absolute path
//would be different than if I would run this in "Heroku"
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
