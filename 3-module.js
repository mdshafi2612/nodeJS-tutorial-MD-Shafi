//CommonJS --> Every file is a module

//To import the exported module, we will use the require global variable
const names = require("./4-names");
// const sayHi = require("./5-utils");
const func = require("./5-utils");
const data = require("./6-altenateflavor");
//When you import a module, by default the module gets invoked even if
//the module is not exported explicitly
//---Example----
require("./7-mind-grenede");
// console.log(names);
// console.log(data);

// sayHi("Susan");
// sayHi(names.peter);
// sayHi(names.john);

// func("Susan");
// func(names.peter);
// func(names.john);
