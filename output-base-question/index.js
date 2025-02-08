a = "hello";
console.log(a);
var a;
output: undefined;

/*
Explanation: 
In JavaScript, variable declarations using var are hoisted to the top of their scope. This means the declaration var a; is moved to the top, but the initialization (a = "hello";) stays in place.
However, because of hoisting, a is undefined when the code reaches console.log(a) before the initialization happens.
So, the value of a is undefined at the time console.log(a) is executed, and then it gets assigned "hello" after the hoisting. */

console.log(0.1 + 0.2 === 0.3);
output: false;
/* 
Explanation: 
JavaScript has floating point precision issues due to how numbers are represented in binary (IEEE 754 standard).
When you add 0.1 and 0.2, the result isn't exactly 0.3 due to precision errors. The result is a small floating-point number that is very close to 0.3, but not exactly 0.3. */

//console.log(0012);
output: 12;
/**
 * Explation
 * Starting from ES6, the behavior of octal literals changed. The leading zero is no longer allowed unless it is part of a valid octal literal, i.e., 0o12 for octal numbers. So, 0012 would now be treated as a decimal number.

In modern JavaScript (ES6+), the number 0012 is simply treated as 12 and will be printed as 12.
 */

console.log(1 + "1");
Answer: "11";
/**Explanation: When a number is added to a string, JavaScript converts the number to a string and concatenates them. So, 1 + "1" results in the string "11". */

console.log("10" - 2);
Answer: 8;
/**Explanation: The string "10" is implicitly converted to a number, so the result is 10 - 2 = 8. */

console.log(2 * "3");
Answer: 6;
/**Explanation: The string "3" is implicitly converted to a number, so the result is 2 * 3 = 6. */

console.log(3 + 4 + "5");
Answer: "75";
/**Explanation: JavaScript evaluates 3 + 4 first, which gives 7. Then, "7" + "5" gives "75", because the + operator with strings results in concatenation. */

console.log("5" * "2");
Answer: 10;
/**Explanation: Both "5" and "2" are converted to numbers, so the multiplication is performed: 5 * 2 = 10. */

let arr = [1, 2, 3];
arr[5] = 5;
console.log(arr);
//Answer: [1, 2, 3, <2 empty items>, 5]
/**Explanation: Setting arr[5] = 5 creates an array with empty slots between index 3 and 5. It results in an array with undefined in those empty slots. */

var a = 1;
var b = a++;
console.log(a, b);
// Answer: 2 1
//Explanation: The post-increment operator a++ increments a after assigning it to b, so a becomes 2, and b gets the value 1.
/**Explanation: The post-increment operator a++ increments a after assigning it to b, so a becomes 2, and b gets the value 1. */

let obj = {};
obj["a"] = 1;
console.log(obj["a"]);
//Answer: 1
/**Explanation: We set a property a on the object obj with a value of 1, so obj['a'] is 1. */

console.log([] + []);
// ans:""
/**Explanation: When two empty arrays are added, they are both coerced into empty strings, and "" + "" results in an empty string. */

console.log(false + 1);
// Answer: 1;
/**Explanation: false is coerced to 0 when used with arithmetic operations, so 0 + 1 = 1. */

console.log("5" - 3);

/**Explanation: JavaScript converts the string "5" to a number and performs the subtraction: 5 - 3 = 2. */
console.log(typeof NaN);
// Answer: "number";
/** Explanation: NaN stands for "Not-a-Number", but its type is still "number" in JavaScript.*/
let str = "Hello";
console.log(str[0]);

/** Explanation: In JavaScript, strings are zero-indexed, so str[0] refers to the first character, which is "H".*/
let obj = { a: 1 };
let copy = obj;
copy.a = 2;
console.log(obj.a);
// Answer: 2;
/** Explanation: Since objects are reference types, copy and obj point to the same memory location. Changing copy.a also changes obj.a.*/
//console.log([1, 2] === "1,2");
// Answer: false;
/** Explanation: Even though the contents are the same, the array [1, 2] is an object, and "1,2" is a string. The === operator checks both type and value, so it's false.*/
console.log([1, 2] == "1,2");

/** Explanation: When comparing an array to a string, JavaScript converts the array to a string. The array [1, 2] becomes "1,2", so the comparison is true.*/
console.log(null == undefined);
// Answer: true;
/** Explanation: The == operator considers null and undefined equal.*/
console.log(a);
var a = 10;
// Answer: undefined
//Explanation: Variable declarations with var are hoisted to the top, but their initialization is not. So, a is hoisted as undefined and then assigned 10 later.
console.log(a);
let a = 10;

/**Answer: ReferenceError: Cannot access 'a' before initialization

Explanation: Variables declared with let are hoisted to the top, but they are in a "temporal dead zone" from the start of the block until the declaration is encountered. Thus, trying to access a before it is initialized causes a reference error. */

console.log(b);
let b = 20;

/** Answer: ReferenceError: Cannot access 'b' before initialization

Explanation: Same as the previous one, let variables are hoisted but can't be accessed before they are initialized.*/
var x = 5;
function test() {
  console.log(x);
  var x = 10;
}
test();

/** Answer: undefined

Explanation: The declaration of x is hoisted inside the function, but its assignment happens after the console.log(x) statement. So x is undefined when logged.*/
console.log(c);
const c = 30;

/** Answer: ReferenceError: Cannot access 'c' before initialization

Explanation: const variables are also hoisted to the top, but they cannot be accessed before their declaration due to the "temporal dead zone."*/
function foo() {
  console.log(a);
  var a = 2;
  console.log(a);
}
foo();

/** Answer:

javascript
Copy
undefined
2
Explanation: The variable a is hoisted to the top of the function, so the first console.log(a) prints undefined (before assignment). The second console.log(a) prints 2 after the assignment.*/
let y = 10;
{
  let y = 20;
}
console.log(y);

/**Answer: 10

Explanation: The let declaration inside the block has block scope. Therefore, the y inside the block does not affect the y outside the block. */
const z = 100;
z = 200;
console.log(z);

/** Answer: TypeError: Assignment to constant variable.

Explanation: const variables cannot be reassigned, so attempting to reassign z results in an error.*/
console.log("start");
setTimeout(() => console.log("middle"), 0);
console.log("end");

/** Explanation: The setTimeout function is asynchronous and its callback is put in the event queue. Since the timeout is 0, the callback will execute after the current call stack finishes, so "end" is logged before "middle".*/
console.log("A");
setTimeout(() => {
  console.log("B");
}, 0);
console.log("C");

/** A
C
B
Explanation: "A" and "C" are logged synchronously, while the setTimeout callback "B" is put in the event queue, and is logged after the call stack is empty.*/
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

/** 1
4
3
2
Explanation: Promises have a higher priority in the event loop than setTimeout. So "3" is logged before "2", despite both being asynchronous. The order is:
Synchronous: "1", "4"
Microtask (Promise): "3"
Macrotask (setTimeout): "2"
*/
console.log("start");
setTimeout(() => {
  console.log("timeout");
}, 1000);
Promise.resolve().then(() => {
  console.log("promise");
});
console.log("end");

/** start
end
promise
timeout
Explanation: The synchronous logs ("start", "end") are logged first. The Promise resolves in the microtask phase, so "promise" is logged before the setTimeout callback "timeout", which is a macrotask.*/

/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
