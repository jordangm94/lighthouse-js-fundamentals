/*const sayHello = function() {
  console.log("Hello, World")
}

sayHello();
*/

const sayHello = function(name) {
  console.log("Hello, " + name);
}
sayHello("Jordan");
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

/*
const sayHelloToConsole = function(name) {
  console.log("Hello " + name);
}

sayHelloToConsole("John");
*/
//vs return: 

const returnSayHello = function(name) {
  return "Hello " + name;
}

const greeting = returnSayHello("John");
console.log(greeting);