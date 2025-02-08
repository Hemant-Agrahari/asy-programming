const sudent = {
  name: "Hemant",
  year: 2020,
  city: "1hmedabad",
  god: "Bhole baba",
};

const sudent1 = { ...sudent, year: 2025 };
console.log(sudent1); //{ name: 'Hemant', year: 2025, city: '1hmedabad', god: 'Bhole baba' }


// Object Properties

/**Object Freeze */
1. Object.freeze()
//Prevents any changes to an object.
const obj = { name: "John" };
Object.freeze(obj);
obj.name = "Jane"; // This will not change the object
console.log(obj.name); // Output: John

