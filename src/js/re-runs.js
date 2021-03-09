
const table = ['Aneta','Marta','Alojzy'];

// Loops

const displ = table.map( e => `${e} Książek`);
console.log(displ);

// Named function
function someName(param) {
  console.log(param)
};
someName('Dont print me');

// Anonymous function
const otherName = function(par) {
  console.log(par);
};
otherName('No to co jak bedzie.'); 

const thirdName = p => console.log(p);
thirdName('What is up doc');






