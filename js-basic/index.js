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

//find occurence
function findHighestOccurrence(arr) {
  const frequencyMap = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  const highestNumber = Object.keys(frequencyMap).reduce((a, b) =>
    frequencyMap[a] > frequencyMap[b] ? a : b
  );

  return {
    number: highestNumber,
    count: frequencyMap[highestNumber],
  };
}

const arr = [1, 3, 2, 3, 4, 3, 5, 2, 3];
const result = findHighestOccurrence(arr);
console.log(result); // Output: { number: '3', count: 4 }
