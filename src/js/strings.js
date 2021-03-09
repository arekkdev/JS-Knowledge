const firstName = "Low";
const lastName = "Turnney";
const age = "31";
const str = "Here is some string";

// Adding Strings

let val;
val = firstName + lastName;
console.log(val);

// String Concatenation

let val_1_1 = firstName + " " + lastName;
console.log("val_1_1 - " + val_1_1);

let val_1_2 = "Hello my name is " + firstName + "and I'm " + age + ".";
console.log("val_1_2 - " + val_1_2);

// String Appending

let val_1_3 = "John";
val_1_3 += " Travolta";
console.log("val_1_3 - " + val_1_3);

// Escaping

//val_1_4 = 'That's awesome, I can't wait.'; //This produces an error
// Double quite solution
let val_1_5 = "That's awesome, I can't wait.";
console.log("val_1_5 - " + val_1_5);
// Backslash escape
let val_1_6 = "That's awesome, I can't wait for you";
console.log("val_1_5 - " + val_1_6);

// String Properties

// Length

let val_1_7 = firstName.length;
console.log("val_1_7 - " + val_1_7);

// String Methods

// concat()

let val_1_8 = firstName.concat(",", lastName);
console.log("val_1_8 - " + val_1_8);

console.log(firstName.concat("-", lastName));

// toUpperCase / toLowerCase

let val_1_9 = firstName.toLocaleLowerCase();
console.log("val_1_9 - " + val_1_9);
let val_2_0 = firstName.toUpperCase();
console.log("val_2_0 - " + val_2_0);

// Strings treaded as an array (first element is indexed 0)

let val_2_1 = firstName[2];
console.log("val_2_1 - " + val_2_1);

// indexOf / lastIndexOf

let val_2_2 = lastName.indexOf("n");
//Looks from left to right for a character, if a character is not found we get -1 result
console.log("val_2_2 : " + val_2_2);

let val_2_3 = "Once someone came to visit me";
// Returns the last position (even from many) at which given string was found
console.log("val_2_3 - " + val_2_3.lastIndexOf("vi"));

// charAt()

let val_2_4 = lastName.charAt(0);
console.log("val_2_4 - " + val_2_4);

// Last character in a string

let val_2_5 = lastName.charAt(lastName.length - 1);
console.log("val_2_5 - " + val_2_5);

// substring()

let val_2_6 = str.substring(0, 9); // returns string from start to end value
console.log("val_2_6 - " + val_2_6);

let val_2_7 = str.substring(2); // returns string from start value to end
console.log("val_2_7 - " + val_2_7);

// slice()
// used mainly for arrays but can also be used for strings

let val_2_8 = str.slice(0, 9);
// return string starting at 0 and ending at 9
console.log("val_2_8 - " + val_2_8);

let val_2_9 = str.slice(3);
// return string starting at 3 to the end
console.log("val_2_9 - " + val_2_9);

let val_3_0 = str.slice(-3);
// retunr string starting at 3 caunting from the back and returns every string to the end
console.log("val_3_0 - " + val_3_0);

// split()

let val_3_1 = str.split(" ");
// take a string split it where it finds given character (' ') - space and place it as table elements
console.log("val_3_1 - " + val_3_1);

// replace()

let val_3_2 = str.replace("string", "looong string");
//replaces first parameter value with second parameter
console.log("val_3_2 - " + val_3_2);

// includes()

let val_3_3 = str.includes("some");
// returns ture if found given string in the variable. Can be also used to check elements in an array
console.log("val_3_3 - " + val_3_3);

/*
 * Short version
 */

console.log("----------");
let t = 'To jest moj dom';
let y = "wczasowy";

let text = t + y;
text = t + ' ponad ' + y;

text = 'To';
text += ' jest';
text += ' czas';

text = 'I\'m the one who is.'; 
text = "I'm the one who is there";

text = y.length;

text = t.concat('-', y);

text = t.toLowerCase();
text = t.toUpperCase();

text = t[3];

text = t.indexOf('j');
text = t.lastIndexOf('j');
text = t.charAt(6);
text = t.charAt(t.length -1);

text = t.substring(4,12);
text = t.substring(4);

text = t.slice(4,12);
text = t.slice(4);
text = t.slice(-5);

text = t.split(' ');

text = t.replace("dom", "domek");

text = t.includes('jes');
console.log("----------");
