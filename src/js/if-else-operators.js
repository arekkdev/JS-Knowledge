const id = '100';

// Eqal to (== comparing operator - testing only value not type. If we compare 100 to '100' it's stil will be true)  
if (id == 100) {
 console.log('correct');
} else {
  console.log('incorrect'); 
}

// Not eqal to (!=)
if (id != 101) {
 console.log('correct');
} else {
  console.log('incorrect'); 
} 

// Strick eqal to (=== compares values and types)

if (id === 100) {
 console.log('correct');
} else {
  console.log('incorrect'); 
}

// Strict not eqal to (!==)
if (id !== 101) {
 console.log('correct');
} else {
  console.log('incorrect'); 
}

// Check if variable is defined
if (id) {
  console.log(`The ID is ${id}`);
} else {
  console.log('No ID');
} 

// Even though we tested id it's till gona give as an error: id is not defined so the correct way is to use typeof (make sure to uncomment other statements to see it working)
if (typeof id !== 'undefined') {  
  console.log(`The ID is ${id}`);
} else {
  console.log('No ID');
}
// or
if (typeof id === 'undefined') {  
  console.log('No ID');
} else {
  console.log(`The ID is ${id}`);
}

// Greater than
if (id > 300) {
 console.log('ID is greater than 300');
} else {
  console.log('ID is not greater than 300'); 
}

// Less than
if (id < 200) {
 console.log('ID is less than 200');
} else {
  console.log('ID is not less than 200'); 
}

// Greater than or equal to
if (id >= 300) {
 console.log('ID is greater or equal to 300');
} else {
  console.log('ID is not greater or equal to 300'); 
}

// Less than or equal to
if (id <= 200) {
 console.log('ID is less than or equal to 200');
} else {
  console.log('ID is not less than or equal to 200'); 
}

// If else

const color = 'red';

if (color === 'red') {
  console.log('Color is red');
} else  if (color === 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is not or blue');
}

// Logical operators

const name = 'Steve';
const age = 20; 

// AND (both true)
if ( age > 0 && age < 12 ) {
  console.log(`${name} is a child`);
} else if ( age >= 13 & age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is and adult`);
}

// OR (one need to be true)
if ( age < 16 || age > 65 ) {
  console.log(`${name} can not run in a race`);
} else {
  console.log(`${name} is registered for the race`);
}

// Ternary operator
const id_1 = 100;
console.log(id_1 === 100 ? 'Correct' : 'Incorrect');


// Wihtout curly braces (if only one line in the statement)
// It's working but it's not encouraged 
if (id_1 === 100)
 console.log(`${id_1} is equal to 100`);
else
  console.log(`${id_1} is not equal to 100`); 
