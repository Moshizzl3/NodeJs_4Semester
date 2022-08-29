// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const alienMessage = {
	message: "Hello, earthling! I bring peace."
};

printText(1, alienMessage.message)

// Log the message 

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const human = {
    name: "Mohamad",
    age: "36"
}

for (const key in human){
    printText(2, `${key}: ${human[key]}`)

}

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

// make a rule called isAllowed and let the value be true

stackOverflow.isAllowed = true;

printText(3, stackOverflow)
// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {
	description: "The best song in the world."
}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 
delete thisSong['description']

thisSong.about = "Just a tribute"
printText(4, thisSong)
// --------------------------------------



function printText(excersiceNumber, result) {

    console.log("Exercise:", excersiceNumber, "- Result:", result);
  
  }