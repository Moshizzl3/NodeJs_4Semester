// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a", "b", "c"];
// show b in the console

const resultOne = letters[1];

printText(1, resultOne);

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it without touching the line above.

friends.push("friend 1");
friends.push("friend 2");
friends.push("friend 3");

printText(2, friends);

// --------------------------------------
// Exercise 3 - Get the index of first occurrence of that value.

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value).

const resultThree = significantMathNumbers.indexOf(1729);

printText(3, resultThree);
// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

diet.splice(diet.indexOf("cucumber") + 1, 0, "hamburger", "soda", "pizza");

printText(4, diet);

// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already.
diet.pop();

printText(5, diet);
// --------------------------------------
// Exercise 6 - Copy array
// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.

const dinnerTray = [...diet];

printText(6, dinnerTray);
// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a", "b", "c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

for (let [index, letter] of lettersExpanded.entries()) {
  if (index % 2 === 1) {
    printText(7, letter);
  }
}

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

for (let n of numbers) {
  if (n > 6 || n < 0) {
    printText(8, n);
  } else {
    discardedNumbers.push(n);
  }
}

printText(8, discardedNumbers);

// --------------------------------------

function printText(excersiceNumber, result) {
  console.log("Exercise:", excersiceNumber, "- Result:", result);
}
