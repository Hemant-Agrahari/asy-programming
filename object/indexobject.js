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
//1. Object.freeze()
//Prevents any changes to an object.
const obj = { name: "John" };
Object.freeze(obj);
obj.name = "Jane"; // This will not change the object
console.log(obj.name); // Output: John

//2.Object.seal()
//Prevents adding or removing properties but allows modifying existing properties.
const obj = { name: "John" };
Object.seal(obj);
obj.name = "Jane"; // Allowed
delete obj.name; // Not allowed
console.log(obj); // Output: { name: 'Jane' }

//3.Object.assign()
//Copies the properties of one or more source objects to a target object.
const target = { name: "John" };
const source = { age: 30 };
const result = Object.assign(target, source);
console.log(result); // Output: { name: 'John', age: 30 }

//4.Object.keys()
// Returns an array of the keys of an object.
const obj = { name: "John", age: 30 };
console.log(Object.keys(obj)); // Output: ['name', 'age']

//5. Object.values()
// Returns an array of the values of an object.
const obj = { name: "John", age: 30 };
console.log(Object.values(obj)); // Output: ['John', 30]

//6.Object.entries()
// Returns an array of key-value pairs of an object.
const obj = { name: "John", age: 30 };
console.log(Object.entries(obj)); // Output: [['name', 'John'], ['age', 30]]
