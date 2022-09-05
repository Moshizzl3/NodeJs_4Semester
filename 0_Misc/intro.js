function genericActionExecutor(anyCallbackFunction, name) {
  // execute some code ...
  return anyCallbackFunction(name);
}

const spitting = (name) => `${name} is spitting`;

console.log(genericActionExecutor(spitting, "mo"));

const shooting = (name) => `${name} is shooting`;
console.log(genericActionExecutor(shooting, "mo"));

console.log(genericActionExecutor((name) => `${name} is shooting`, "Mo"));
