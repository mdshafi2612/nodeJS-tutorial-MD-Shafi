//local
const secret = "SECRET CODE";

//share
const peter = "Peter";
const john = "John";

//module prints an object in which we have the property named "export" which is
//also an object
//exports: {},
//By using exports, we can export the specific variable so that we access that variable
//from other file within the same application
// console.log(module);

//---we want to export the peter and john property, secret property is local
//Here, we are exporting objects
module.exports = {
  peter: peter,
  john: john,
};

//Alternate ES6 way
// module.export = {
//   peter,
//   john
// };
