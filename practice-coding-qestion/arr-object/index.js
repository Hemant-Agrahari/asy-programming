const arr = [1, 1, 2, 3, 4, 5];
// Using Set to remove duplicates
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]

const obj = [
  { name: "Hemant", city: "Khaga" },
  { name: "Ramesh", city: "KhaKanga" },
  { name: "Om", city: "Ahmedabad" },
  { name: "Hemant", city: "Khaga" },
  { name: "Om", city: "Ahmedabad" },
];

// Remove duplicate objects
const uniqueObj = obj.filter(
  (value, index, self) =>
    index === self.findIndex((t) => JSON.stringify(t) === JSON.stringify(value))
);

console.log(uniqueObj);
// Output: [
//   { name: "Hemant", city: "Khaga" },
//   { name: "Ramesh", city: "KhaKanga" },
//   { name: "Om", city: "Ahmedabad" }
// ]
