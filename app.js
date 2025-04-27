/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
// Exercise 2: isAdult()


const isAdult = (age) => {
  if (age >= 18) {
    return 'Adult';
  } else {
    return 'Minor';
  }
}
console.log('Exercise 2 Result: isAdult(21)');
console.log('Exercise 2 Result: isAdult(16)');

//  Exercise 3 : ischarAvowels
const ischarAvowel = (char) => {
  if (char === 'a') {
    return true;
  } else if (char === 'e') {
    return true;
  }
 else if (char === 'i') {
  return true;
} else if (char === 'o') {
  return true;
} else if (char === 'u') {
  return true;
}  else {
  return false;
}
}
console.log('Exercise 3 Result: isCharAVowel("a")');
console.log('Exercise 3 Result: isCharAVowel("n")');

// Exercise 4: generateEmail
const generateEmail = (name, domain) => {
  return name + '@' + domain;
}
console.log('Exercise 4 Result': generateEmail("johnsmith", "example.com"))
return name + '@' + domain;

}


console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

console.log('Exercise 4 Result:', generateEmail("hamad.ali", "gmail.com"));


// Exercise 5: greetUser


function greetUser(name, timeOfDay) {

return "Good " + timeOfDay + ", " + name + "!";

}


console.log('Exercise 5 Result:', greetUser("Hamad", "evening"));


// Exercise 6: maxOfThree


const maxOfThree = (num1, num2, num3) => {

// function maxOfThree(num1, num2, num3) {

if (num1 >= num2 && num1 >= num3) {

return num1;

} else if (num2 >= num1 && num2 >= num3) {

return num2;

} else {

return num3;

}

}


console.log('Exercise 6 Result:', maxOfThree(20, 10, 80));

console.log('Exercise 6 Result:', maxOfThree(3, 8, 2));


// Exercise 7: calculateTip


function calculateTip(billAmount, tipPercentage) {

return (billAmount * tipPercentage) / 100;

}


console.log('Exercise 7 Result:', calculateTip(50, 20)); 

console.log('Exercise 7 Result:', calculateTip(120, 15)); 


// Exercise 8: convertTemperature


const convertTemperature = (temperature, scale) => {

// function convertTemperature(temperature, scale) {

if (scale === 'C') {

// Convert Celsius to Fahrenheit

return (temperature * 9/5) + 32;

} else if (scale === 'F') {

// Convert Fahrenheit to Celsius

return (temperature - 32) * 5/9;

}

}


console.log('Exercise 8 Result:', convertTemperature(32, "C"));

console.log('Exercise 8 Result:', convertTemperature(32, "F"));


// Exercise 9: basicCalculator


const basicCalculator = (num1, num2, operation) => {

// function basicCalculator(num1, num2, operation) {

if (operation === 'add') {

return num1 + num2;

} else if (operation === 'subtract') {

return num1 - num2;

} else if (operation === 'multiply') {

return num1 * num2;

} else if (operation === 'divide') {

return num1 / num2;

}

}


console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

console.log('Exercise 9 Result:', basicCalculator(10, 5, "add"));

console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply"));

console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide"));


// Exercise 10


const calculateGrade = (score) => {

if (score >= 90) {

return 'A';

} else if (score >= 80){

return 'B';

} else if (score >= 70) {

return 'C';

} else if (score >= 60) {

return 'D';

} else {

return 'F';

}

}


console.log('Exercise 10 Result:', calculateGrade(91));

console.log('Exercise 10 Result:', calculateGrade(85));

console.log('Exercise 10 Result:', calculateGrade(74));

console.log('Exercise 10 Result:', calculateGrade(68));

console.log('Exercise 10 Result:', calculateGrade(56));


// Exercise 11 


const createUsername = (firstName, lastName) => {

const firstPart = firstName.substring(0, 3);

const lastPart = lastName.substring(0, 3);

const totalLength = firstName.length + lastName.length;

return firstPart + lastPart + totalLength;

}


console.log('Exercise 11 Result:', createUsername('Samantha', 'Green'));

console.log('Exercise 11 Result:', createUsername('Hamad', 'Ali'));

console.log('Exercise 11 Result:', createUsername('Martin', 'Lowrins'));


// Exercise 12 


const numArgs = (...arguments) => arguments.length;


// Regular Function Method

// function numArgs() {

// return arguments.length;

// }


console.log('Exercise 12 Result:', numArgs(15, 'Hamad'));

console.log('Exercise 12 Result:', numArgs());

console.log('Exercise 12 Result:', numArgs(1, 3, 5));











console.log('Exercise 2 Result:', isAdult(21));

  