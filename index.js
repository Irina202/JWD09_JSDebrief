
let skyColor = "blue";
let carColor = "blue";
let hairColor = "black";

console.log(skyColor === carColor);
console.log(skyColor === hairColor);
console.log(skyColor !== hairColor);

let x = 6;
y = 3;
console.log(x < 10 && y > 1);
console.log(x == 5 || y == 5)
console.log(!(x == y))


let numberToCheck = 19;
if (numberToCheck < 20) {
    console.log("Your number is less than 20");
} else {
    console.log('Your number is greater than or equal to 20')
}

if (numberToCheck%2 === 0) {
    console.log("Your number is even");
} else {
    console.log("Your number is odd");
}

if (numberToCheck === 0) {
    console.log("Your number is zero");
} else if (numberToCheck > 0) {
    console.log('Your number is greater than zero')
} else {console.log('Your number is less than zero')};

console.log(Math.sign(numberToCheck));

a = 10;
b = 50;

const compareNumbers = (a, b) => {a>b ? console.log("a is greater or equal to b") : console.log("b is greater than a")};
compareNumbers(a, b);

let monthToCheck = '';
monthToCheck = "June";
if (monthToCheck === 'December' || monthToCheck === 'January' || monthToCheck === 'February') {
    console.log("Summer");
} else if (monthToCheck === 'March' || monthToCheck === 'April' || monthToCheck === 'May') {
    console.log('Autumn')
} else if (monthToCheck === 'June' || monthToCheck === 'July' || monthToCheck === 'August') {
    console.log('Winter')
} else if (monthToCheck === 'September' || monthToCheck === 'October' || monthToCheck === 'November') {
    console.log('Spring')
} else {console.log('Your month is undefined')};

let score= 49;
if (score < 50) {
    console.log("Fail");
} else if (score < 70) {
    console.log("Pass");
} else if (score < 86) {
    console.log("Credit");
} else if (score >= 86) {
    console.log("Distinction");
} else {console.log("wrong score");
}

let light = "red";
switch (light) {
  case "green":
    console.log("You should go!");
    break;
  case "orange":
    console.log("You should slow down…");
    break;
  case "red":
    console.log("You should stop!");
    break;
  default:
    console.log("Please enter a valid value");
    break;   
}
