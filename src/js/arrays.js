    // Create array using Array constructor
const arr_1_0 = new Array(22, 8, "yes", "no");
console.log("arr_1_0 : " + arr_1_0);

// Create array popoluar way
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log("Numbers : " + numbers);

// Create strings array
const strings = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
console.log("Strings : " + strings);

// Create mixed array
const mixed = [
  "Monday",
  true,
  5,
  undefined,
  null,
  { a: 2, b: "yo" },
  [3, 4, 5],
  new Date()
];
console.log("Mixed : " + mixed);

/*
 * Properties and Methods
 */

// Get array length
const val_1_0 = numbers.length;
console.log("Array Length : " + val_1_0);

// Check if array
const val_1_1 = Array.isArray(numbers);
console.log("Is array : " + val_1_1);

// Get single array value
const val_1_2 = strings[3];
console.log("Get single array value :" + val_1_2);

// Insert value into array at the specific position
strings[2] = "New_day";
console.log(`New value at position 2 : ${strings}`);

// Find index of given array element
const val_1_3 = strings.indexOf("Thur");
console.log(`indexOf('Thur') : ${val_1_3}`);

/*
 * Mutating arrays
 */

// Add new element at the begining of array
strings.unshift("First Element");
console.log(strings);

// Remove first element from arrays
strings.shift();
console.log(strings);

// Add new element at the end of array
strings.push("Last Element");
console.log(strings);

// Remove last element from array
strings.pop();
console.log(strings);

// Splice values - it takes three values
//https://pl.khanacademy.org/computing/ap-computer-science-principles/programming-101/lists/a/storing-lists-of-data?lang=pl&modal=1
// - the index where it should insert the item
// - the number of items to remove
// - and the item to insert.
/* variable.splice(
  index where to add,
  how many elements it should span,
  element to be added
)*/

// If no third parameter and its start and end value are the same - in this cae one element will be removed
strings.splice(1, 1);
console.log(`Splice 1 element, at index 1 : ${strings}`);

// Starting at index 2 remove 5 elements
numbers.splice(2, 5);
console.log(`Splice 5 elements, starting at index 2 : ${numbers}`);

// Insert new element without removing/replacing any existing
// It puts new value at first position and shift all other
// (always when second value is 0)
strings.splice(0, 0, "I am new on the block");
console.log(`Add new first value using splice : ${strings}`);

// Add new value replacing 6 elements starting at index 0
strings.splice(0, 6, "Baam", "Laam", "Tamm");
console.log(`Add Baam Laam Taam replacing elemnts 0 - 6: ${strings}`);

// Remove a single item at position 1
console.log(strings);
strings.splice(1, 1);
console.log(`Removed one element at postion 1 ${strings}`);
console.log(strings);

// Reverse array
strings.reverse();
console.log(`Reversed array : ${strings}`);

// Concatanating arrays
val_1_4 = numbers.concat(strings);
console.log(`Concatanated numbers and strings array ${val_1_4}`);

// Sorting arrays

val_1_5 = strings.sort();
console.log(`Sorted strings array ${val_1_5}`);

val_1_6 = numbers.sort();
// It's sorting numbers by the first digit
console.log(`Sorted numbers array ${numbers}`);
// To fix it
val_1_7 = numbers.sort((x, y) => x - y);
console.log(`Better sorting ${val_1_7}`);
//Reverse sort
val_1_8 = numbers.sort((x, y) => y - x);
console.log(`Better sorting ${val_1_8}`);

// Find first element in array meeting the condition, otherwise returen "undefinded"
// find() is not supported in IE 11
let under10 = (num) => num < 10;
val_1_9 = numbers.find(under10);
console.log(`First number under 10 is ${val_1_9}`);

// if any wrong results make sure to comment out all sort and reverse methods
let over12 = (num) => num > 12;
console.log(numbers)
val_2_0 = numbers.find(over12);
console.log(`First number over 12 is ${val_2_0}`);


// Array looping

const tab = [1,2,3];


for (let i = 0; i < tab.length; i++) {
  console.log(tab[i]);
}


for (let h of tab) {
  console.log(h);
}

tab.forEach(
  function(el) {
    console.log(el);  
  }
);

tab.forEach(el => console.log(el))


let test = tab.map(function(t){
  return `${t} + 5`;
})

console.log(test);
// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Create array using Array constructor
const arr_1_0 = new Array(22, 8, "yes", "no");
console.log("arr_1_0 : " + arr_1_0);

// Create array popoluar way
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log("Numbers : " + numbers);

// Create strings array
const strings = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
console.log("Strings : " + strings);

// Create mixed array
const mixed = [
  "Monday",
  true,
  5,
  undefined,
  null,
  { a: 2, b: "yo" },
  [3, 4, 5],
  new Date()
];
console.log("Mixed : " + mixed);

/*
 * Properties and Methods
 */

// Get array length
const val_1_0 = numbers.length;
console.log("Array Length : " + val_1_0);

// Check if array
const val_1_1 = Array.isArray(numbers);
console.log("Is array : " + val_1_1);

// Get single array value
const val_1_2 = strings[3];
console.log("Get single array value :" + val_1_2);

// Insert value into array at the specific position
strings[2] = "New_day";
console.log(`New value at position 2 : ${strings}`);

// Find index of given array element
const val_1_3 = strings.indexOf("Thur");
console.log(`indexOf('Thur') : ${val_1_3}`);

/*
 * Mutating arrays
 */

// Add new element at the begining of array
strings.unshift("First Element");
console.log(strings);

// Remove first element from arrays
strings.shift();
console.log(strings);

// Add new element at the end of array
strings.push("Last Element");
console.log(strings);

// Remove last element from array
strings.pop();
console.log(strings);

// Splice values - it takes three values
//https://pl.khanacademy.org/computing/ap-computer-science-principles/programming-101/lists/a/storing-lists-of-data?lang=pl&modal=1
// - the index where it should insert the item
// - the number of items to remove
// - and the item to insert.
/* variable.splice(
  index where to add,
  how many elements it should span,
  element to be added
)*/

// If no third parameter and its start and end value are the same - in this cae one element will be removed
strings.splice(1, 1);
console.log(`Splice 1 element, at index 1 : ${strings}`);

// Starting at index 2 remove 5 elements
numbers.splice(2, 5);
console.log(`Splice 5 elements, starting at index 2 : ${numbers}`);

// Insert new element without removing/replacing any existing
// It puts new value at first position and shift all other
// (always when second value is 0)
strings.splice(0, 0, "I am new on the block");
console.log(`Add new first value using splice : ${strings}`);

// Add new value replacing 6 elements starting at index 0
strings.splice(0, 6, "Baam", "Laam", "Tamm");
console.log(`Add Baam Laam Taam replacing elemnts 0 - 6: ${strings}`);

// Remove a single item at position 1
console.log(strings);
strings.splice(1, 1);
console.log(`Removed one element at postion 1 ${strings}`);
console.log(strings);

// Reverse array
strings.reverse();
console.log(`Reversed array : ${strings}`);

// Concatanating arrays
const val_1_4 = numbers.concat(strings);
console.log(`Concatanated numbers and strings array ${val_1_4}`);

// Sorting arrays

const val_1_5 = strings.sort();
console.log(`Sorted strings array ${val_1_5}`);

const val_1_6 = numbers.sort();
// It's sorting numbers by the first digit
console.log(`Sorted numbers array ${numbers}`);
// To fix it
const val_1_7 = numbers.sort((x, y) => x - y);
console.log(`Better sorting ${val_1_7}`);
//Reverse sort
const val_1_8 = numbers.sort((x, y) => y - x);
console.log(`Better sorting ${val_1_8}`);

// Find first element in array meeting the condition, otherwise returen "undefinded"
// find() is not supported in IE 11
let under10 = (num) => num < 10;
const val_1_9 = numbers.find(under10);
console.log(`First number under 10 is ${val_1_9}`);

// if any wrong results make sure to comment out all sort and reverse methods
let over12 = (num) => num > 12;
console.log(numbers)
const val_2_0 = numbers.find(over12);
console.log(`First number over 12 is ${val_2_0}`);


// Array looping

const tab = [1,2,3];


for (let i = 0; i < tab.length; i++) {
  console.log(tab[i]);
}


for (let h of tab) {
  console.log(h);
}

tab.forEach(
  function(el) {
    console.log(el);  
  }
);

tab.forEach(el => console.log(el))


let test = tab.map(function(t){
  return `${t} + 5`;
})

console.log(test);


