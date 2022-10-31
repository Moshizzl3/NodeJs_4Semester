/* 
Why: Javascript is single-threaded
If we didnt write async code we could have blocking code.

Usecases of async code:
- Data travling over a network (fetch)
- Reading and writing to files
- Import modules when async calling urls
- Interacting with a database
- Heavy computations
- Encryption/decryption

Basically everything that takes time, since we dont want to block code from running

Solution 1:
Callback functions
problem: callback hell, pyramid of doom

Promises is syntactic suger, basically nested callbacks
Solution 2:
Can have two diff diffrent state:
 -pending
 -fullfilled
    - resolved, rejected

solution 3:
Introducing async/await
again syntactic sugar
    - to use it on variables, u can do 3 tings:
        - .mjs on filename example: app.mjs
        - add experimental flag
        - add type:module in package.json file

// IIFE wrap a function in (function)(), this makes the function run immidiatly  

*/

new Promise((resolve, reject) => {
  try {
    //throw Error
    resolve("Yay");
  } catch (stackTrace) {
    reject("nay");
  }
})
  .then((succesMessage) => console.log(succesMessage))
  .catch((err) => console.log(err));

function somethingGoodSomethingBad() {
  return new Promise((resolve, reject) => {
    try {
      //throw new Error("bad");
      setTimeout(() => {
        resolve("good");
      }, 3000);
    } catch {
      reject("bad");
    }
  });
}

/* somethingGoodSomethingBad()
  .then((succes) => console.log(succes))
  .catch((err) => console.log(err));
 */