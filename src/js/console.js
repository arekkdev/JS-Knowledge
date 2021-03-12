console.log("text to display");

let variable = "here is some text";

console.log(variable);

let my = {
  name: "Kot",
  surname: "Psot"
};

//console.log(myObject);
console.table(my);

// Objects
let myObject = {
  type: "manual",
  height: "long"
};
console.log(myObject);
console.table(myObject);

// Expresssions
console.log(4 + 4);

// Get entire document structure
console.log(document);

// When selecting element from DOM it gets highlighted
document.querySelector("p");

// Changing styles of elements
document.querySelector("body").style.background = "blue";

// Console Error & Warnings
console.error("This is error.");
console.warn("This is warning");

// Clearing console
//console.clear() ;

// Timer
console.time("Hello");
//now execute some js, it will be measured
console.timeEnd("Hello");
// opening and closing name have to be the same (here it's Hello)
