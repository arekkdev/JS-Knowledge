/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
https://www.w3schools.com/js/js_dates.asp
*/

// Instantiate Date object

const today = new Date();
console.log(today);

// Date is an object
console.log(typeof today);

// We can change date object into a string.
val_1_0 = today.toString();
console.log(val_1_0);
console.log(typeof val_1_0);

// |Instatiate with date and time
let birthday = new Date('2021-02-10'); // Format like 10-01-1981 display wrong, hmmm
console.log(birthday);

// Instatiate with date and time
const val_1_1 = new Date('2021-05-11, 12:43:05'); // Display time 2h back probably, time zone thing
console.log(val_1_1);

const val_1_2 = new Date('2021 January 01'); // Displays one day back, hmmm
console.log(val_1_2);


const val_1_3 = new Date('2021/10/10'); // Displays one day back, hmmm
console.log(val_1_3);

// Get month - numeric (months are 0 base so Janury is 0, February is 1 etc.)
const val_1_4 = today.getMonth();
console.log(val_1_4);

// Get day of the month (numeric)
const val_1_5 = today.getDate();
console.log(val_1_5);

// Get day of the week (numeric 0 - Sunday, 1 - Monday ... 6 - Saturday)
const val_1_6 = today.getDay();
console.log(val_1_6);

// Get year
const val_1_7 = today.getFullYear();
console.log(val_1_7);

// Get hours ( hours from e.g. 15:32)
const val_1_8 = today.getHours();
console.log(val_1_8);

// Get minutes ( minutes from e.g. 15:32)
const val_1_9 = today.getMinutes();
console.log(val_1_9);

// Get minutes ( minutes from e.g. 15:32:01)
const val_1_10 = today.getSeconds();
console.log(val_1_10);

// Get current timestamp (number of second which passed since 1970/01/01)
const val_1_11 = today.getTime();
console.log(val_1_11);


// Set month, SetDate (day number)
console.log(birthday);
birthday.setMonth(11); // months are 0 base so 11 is December
birthday.setDate(5);
birthday.setFullYear(2018);
birthday.setHours(3); //again it's 1 hour back, probably time zone related
birthday.setMinutes(30);
birthday.setSeconds(25);
console.log(birthday);