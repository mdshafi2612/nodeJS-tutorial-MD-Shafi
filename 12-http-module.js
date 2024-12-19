// We can use http module to create server side apllication
// importing the http module
const http = require("http");

//We will use the http module's method "createserver" to create a server
// The createServer() method expects two objects inside a callback function,
// It is common to name the first object as "req" object to handle the incoming client request
// And the second object as "res" object to return the response after processing the request
// const server = http.createServer((req, res) => {
//   // In this case, after processing, we write just a "hello" message in the console
//   res.write("Hello from our home page");
//   // Then we end the request
//   res.end();
// });

// Ofcourse, to start the server, the server should listen on a specific port
// we do this using the port() method
// In this case, the server is listening on port 5000
// server.listen(5000);
//Note when we run this file, we will see that the terminal is not existing the code
//Because it is expected for a server to always listen for the incoming request
//If we type "localhost:5000" in the web server, we will see the message "Hello from our
// home page" indicating that the server is running

//----------------Now we will see one useful method of the request object of the
// --------------http createServer() method
const server = http.createServer((req, res) => {
  //req.url() method provides us the end point on which the
  //client is requesting the service of the server
  //Or simply, the endpoint on which the client is connecting
  // to the server
  if (req.url === "/") {
    res.end("This is our home page");
  } else if (req.url === "/about") {
    res.end("This is our about page");
  } else {
    // The client is requesting for a resource that does not exist in the server
    res.end(`
            <h1>Ooops!</h1>
            <p>Can't seem to find the page you are looking for</p>
            <a href='/'>back to home page</a>
            `);
  }
});

server.listen(5000);
