//Callback Examples
var callback = () => {
    console.log('callback called');
}

// setTimeout(callback, 2000);

var p = (name) => {
    console.log(name);
}

function printName(name, print){
    print(name);
}

printName("Pritesh", p);

var name = "John Doe";
printName("Pritesh", (name) => {
    console.log(name);
});
printName(name, p)

var countries = ['India', 'USA', 'UK', 'Canada', 'Australia'];
countries.map((country) => {
    console.log(country);
});