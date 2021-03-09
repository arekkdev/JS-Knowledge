// Object Literal
// with key value pairs
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
      city: 'Miami',
      state: 'FL'
    },
    getBirthYear: function() {
      return 1987;
    }
  }
  
  // Get object
  const val_1_0 = person;
  console.log(val_1_0);
  
  // Get specific value
  const val_1_1 = person.firstName; // Newer, preffered method
  const val_1_2 = person['firstName']; // Older
  console.log(val_1_1);
  console.log(val_1_2);
  
  const val_1_3 = person.age;
  console.log(val_1_3);
  
  const val_1_4 = person.hobbies
  console.log(val_1_4);
  const val_1_5 = person.hobbies[1];
  console.log(val_1_5);
  
  const val_1_6 = person.address;
  console.log(val_1_6);
  const val_1_7 = person.address.state; // New preffered way
  console.log(val_1_7);
  const val_1_8 = person.address['state']; // Old way
  console.log(val_1_8);
  
  
  const val_1_9 = person.getBirthYear();
  console.log(val_1_9);
  
  // Calculation inside object
  
  const person1 = {
    age: 30,
    getBirthYear: function() {
      return 1987 - this.age; // without this we will get - age is not defined, this refers to the object
    }
  }
  
  // Array of objects
  
  const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Nancy', age: 40}
  ];
  
  // Looping through array of objetcts
  for (let i = 0; i < people.length; i++) {
    console.log(people[i].name)
  }
  
  people.forEach(
    elem => console.log(elem.age)
  );
  
  for (let el of people) {
    console.log(el.name);
  }