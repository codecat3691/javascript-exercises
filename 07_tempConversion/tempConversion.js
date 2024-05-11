const convertToCelsius = function(temp) {

// convert temperatures from Fahrenheit to Celsius, and vice versa.

// x °F ≘ (x − 32) × 5/9 °C

let fahrenheit = temp;

let celsius = (fahrenheit - 32) * 5/9;

console.log("This Amount of Fahrenheit:", fahrenheit);
console.log("Is Equal to this Amount in Celsius:", celsius);

let roundedCelsius = Math.round(celsius * 10) / 10;

// This rounds the result to one decimal place...

console.log("The Rounded Amount in Celsius:", roundedCelsius);


return roundedCelsius;

};

const convertToFahrenheit = function(temp) {

// x °C ≘ (x × 9/5 + 32) °F

let celsius = temp;

let fahrenheit = (celsius * 9/5 + 32);


console.log("This Amount of Celsius:", celsius);
console.log("Is Equal to this Amount in Fahrenheit:", fahrenheit);

let roundedFahrenheit = Math.round(fahrenheit * 10) / 10;

// This rounds the result to one decimal place...

console.log("The Rounded Amount in Fahrenheit:", roundedFahrenheit);


return roundedFahrenheit;

};


convertToCelsius(88.16);

convertToFahrenheit(31.2);


// npm test tempConversion.spec.js -- --watch


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
