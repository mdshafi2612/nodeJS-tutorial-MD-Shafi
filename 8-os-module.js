//Here We are importing the node buit-in "os" module, so
//we do not need to use the "./"
const os = require("os");

//Info about the current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
