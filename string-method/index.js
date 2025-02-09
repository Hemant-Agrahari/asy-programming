//1. slice()
//Definition:
// The slice() method returns a shallow copy of a portion of an array or string into a new array without modifying the original array.
Syntax;
array.slice(startIndex, endIndex);
/**
 * 
startIndex (optional): The index where extraction begins.
endIndex (optional): The index before which to stop extraction (not inclusive). If omitted, it goes to the end of the array.
Return value: A new array containing the extracted elements.

 */
const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
const slicedFruits = fruits.slice(1, 4);

console.log(slicedFruits); // Output: ["Banana", "Mango", "Orange"]
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange", "Pineapple"]

/**The original fruits array is not modified.
Extraction starts at index 1 and stops at index 4 (not included). */

/**2. splice() */
/**Definition:
The splice() method changes the content of an array by adding, removing, or replacing elements. */
syntax:
array.splice(startIndex, deleteCount, item1, item2, ...)

/**
 * startIndex: The index at which to start changing the array.
deleteCount (optional): The number of elements to remove.
item1, item2, ... (optional): Elements to add at the specified position.
Return value: An array containing the removed elements.
 */

//Example 1: Removing Elements
/**
 * const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
const removedFruits = fruits.splice(1, 2);

console.log(removedFruits); // Output: ["Banana", "Mango"]
console.log(fruits); // Output: ["Apple", "Orange", "Pineapple"]

 */

/**
 * Example 2: Adding Elements
 */

/**
 * const fruits = ["Apple", "Orange"];
fruits.splice(1, 0, "Banana", "Mango");

console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

 */


//Example 3: Replacing Elements
/**
 * const fruits = ["Apple", "Banana", "Mango"];
fruits.splice(1, 1, "Orange");
console.log(fruits); // Output: ["Apple", "Orange", "Mango"]
 */