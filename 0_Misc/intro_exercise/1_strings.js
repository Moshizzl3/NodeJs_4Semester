// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const resultOne = Number(numberOne) + Number(numberTwo);

printText(1, resultOne);

// --------------------------------------

// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const resultTwo = Number(anotherNumberOne) + Number(anotherNumberTwo);

printText(2, resultTwo.toFixed(2));

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const resultThree = (one + two + three) / 3;

printText(3, resultThree.toFixed(5));

// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"
const resultFour = letters[2];

printText(4, resultFour);
// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
const resultFive = fact.replace("j", "J");

printText(5, resultFive);

// --------------------------------------

function printText(excersiceNumber, result) {

  console.log("Exercise:", excersiceNumber, "- Result:", result);

}
