// Exercise 1
const greetNames = (names, count) => {
  const greeting = 'Hello';

  
  for (const name of names) {
    console.log(`${greeting} ${name}`);
  }
};

const namesArray = ['Roda', 'Issa', 'Mohamed', 'Lisa'];
const numberOfNames = namesArray.length;
greetNames(namesArray, numberOfNames);

// Exercise 2
const capitalizeFirstLetter = (str) => {
  const [firstChar, ...restOfString] = str;
  return `${firstChar.toUpperCase()}${restOfString.join('')}`;
};

console.log(capitalizeFirstLetter('fooBar')); 
console.log(capitalizeFirstLetter('nodeJs')); 

// Exercise 3
const colorsArray = ['red', 'green', 'blue'];
const capitalizedColors = colorsArray.map(color => capitalizeFirstLetter(color));
console.log(capitalizedColors); 

// Exercise 4:
const numberValues = [1, 60, 34, 30, 20, 5];
const lessThan20 = numberValues.filter(value => value < 20);
console.log(lessThan20); 


const numbers = [1, 2, 3, 4];

// Exercise 5

const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); 


const product = numbers.reduce((total, num) => total * num, 1);
console.log(product); 




// Exercise 6
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  getDetails() {
    return `Model: ${this.model} Engine ${this.year}`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year); 
    this.balance = balance;
  }

  getInfo() {
    return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
  }
}

const car = new Car('Pontiac Firebird', 1976);
console.log(car.getDetails()); 

const sedanCar = new Sedan('Volvo SD', 2018, 30000);
console.log(sedanCar.getInfo()); 
