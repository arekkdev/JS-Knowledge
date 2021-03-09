const elements = ["one", "two", "three"];
console.log(elements);

// ES 5 for loop - supported in IE 11
for (let i = 0; i < elements.length; i++) {
  console.log(elements[i]);
}

// ES 6 for loop
for (const el of elements) {
  console.log(el);
}

// ES 5 forEach loop - not supported in IE 11
elements.forEach(function(el) {
  console.log(el);
});

// ES 6 forEach loop - with arrow function
elements.forEach(el => console.log(el));

// Start

/*
 * For Loop
 */

// Used most of times.
// Use when you know how many times you will iterate

for (let i = 0; i < 5; i++) {
  console.log("Number" + i);
}

/* 
Number 0
Number 1
Number 2
Number 3
Number 4
... 
*/

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log("2 is my favourite number");
  }

  console.log("Number" + i);
}

/* 
I this case if condition is true and text is displayed but Number 2 is also displayed

Number 0
Number 1
2 is my favourite number
Number 2
Number 3
Number 4
... 
*/

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log("2 is my favourite number");
    continue;
  }

  if (i === 4) {
    break;
  }

  console.log("Number" + i);
}

/* 
continue and break applie to all loops 
continue - stops the loop and goes to the next interation (no Number 2 in this case)
break - stops the loop completely

Number 0
Number 1
2 is my favourite number
Number 3
Number 4
// no other numbers here
*/

/*
 * While Loop
 */

// Used when we do not exactly know how many time the loop will interate
// May not itereate even once

let i = 0;

while (i < 5) {
  console.log(`Number ${i}`);
  i++;
}

/*
 * Do While Loop
 */
// Independetly of the condition this loop will always run at least once

let j = 0;

do {
  console.log(`Number ${j}`);
  j++;
} while (j < 5);

/*
 * Loop through Arrays
 */
console.clear();
const cars = ["Ford", "Honda", "Toyota", "Audi"];

//for (let i = 0; i < cars.length; i++) {
//console.log(cars[i]); //cars[index] - way to get elements from array
//}

let x = 0;

while (x < cars.length) {
  console.log(cars[x]);
}
