// console.log(module); // module object
var name = "Roda Issa"

function greet(name) {
    console.log("Hello " + name);
}

function sayHello() {
    console.log("Hello World");
}

module.exports = { 
    name,
    greet,
    sayHello
}