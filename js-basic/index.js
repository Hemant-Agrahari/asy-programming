const numberss = [1, 2, 3, 4, 5];

// Using arrow function with map
const doubledNumbers = numberss.map((num) => num * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const numbers = [1, 2, 3, 4, 5];

// Using arrow function with reduce
const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);

console.log(sum); // 15

//To print the occurrences of each element in an array
const arr1 = [1, 2, 3, 2, 4, 1, 1, 2];

// Using reduce to count occurrences
const occurrenceMap = arr1.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

// Print the result
console.log(occurrenceMap);

//find occurence of a element program
const arr = ["a", "a", "c", "d", "a", "a"];
// Create a frequency object
const frequency = {};
// Count the occurrences of each element
arr.forEach((item) => (frequency[item] = (frequency[item] || 0) + 1));
// Find the element with the highest frequency
const maxElement = Object.keys(frequency).reduce((a, b) =>
  frequency[a] > frequency[b] ? a : b
);

console.log(`${maxElement}: ${frequency[maxElement]}`);

//function for memoized
function memoize(fn) {
  const cache = {}; // Store previous results

  return function (arg) {
    if (cache[arg]) {
      console.log("Fetching from cache...");
      return cache[arg];
    }

    console.log("Calculating result...");
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

// Example function to memoize
function square(n) {
  return n * n;
}

const memoizedSquare = memoize(square);
console.log(memoizedSquare(5)); // Calculating result... 25
console.log(memoizedSquare(5)); // Fetching from cache... 25
console.log(memoizedSquare(10)); // Calculating result... 100
