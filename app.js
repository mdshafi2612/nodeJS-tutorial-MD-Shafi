// npm - global command
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)'
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)
// In the above commands (hypens -) is used for the flag.
// for example -y flag
// Once we install the package "lodash", we can immediate see under the dependencies property
// we have the "lodash" package installed, that means we can use the "lodash" package in
// our own project
//   "dependencies": {
//     "lodash": "^4.17.21"
//   }
// Also when a package needs other packages for dependency, they will be automatically installed
// we can also crosscheck it by viewing that inside the "node_modules" folder
// FOr example, when we installed "bootstrap" package, it will automatically
// install the popper.js and the jquery package as dependencies

// "_" means we have access to everything inside the module named "lodash"
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
//Since we have already installed the package "lodash", we
// can use it using the require
// "lodash" module has one method named "flattenDeep" which will fallten
// the above array into a single list
const newItems = _.flattenDeep(items);
console.log(newItems);
