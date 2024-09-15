function welcome(){
    console.log('Welcome to the class');
}


function greet(name){
    console.log('Hello, ${name}');
}

console.log(typeof welcome);
console.log(typeof greet);

// function Expression
var welcome = function(){
    console.log('Welcome to the class');
}

// arrow function 
var welcome = () => {
    console.log('Welcome to the class');
}

var greet = () => {
    console.log('Hello, ${name}');
}

var add = (a,b) => a + b

var add = (a,b) =>{
    return a + b
}



function print(a, b, ...c){
    console.log(arguments);
    console.log(a);
    console.log(b);
    console.log(c);
}

print(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


