//Reverse a Number
const reverseNumber = (num) => {
  let reversed = 0;
  while (num > 0) {
    let lastDigit = num % 10; // Get the last digit
    reversed = reversed * 10 + lastDigit; // Add the last digit to the reversed number
    num = Math.floor(num / 10); // Remove the last digit from num
  }

  return reversed;
};
console.log(reverseNumber(12345)); // Output: 54321
console.log(reverseNumber(9876)); // Output: 6789

// check palindrone number
const isPalindrome = (num) => {
  let original = num;
  let reversed = 0;

  while (num > 0) {
    let lastDigit = num % 10; // Get the last digit
    reversed = reversed * 10 + lastDigit; // Add the last digit to the reversed number
    num = Math.floor(num / 10); // Remove the last digit from num
  }

  // Check if the original number is equal to the reversed number
  return original === reversed;
};
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(12345)); // Output: false

//Reverse a string
const reverseString = (str) => {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // Add each character to the reversed string
  }

  return reversed;
};
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"

//write a factorial number
const factorial = (num) => {
  if (num < 0) return "Factorial is not defined for negative numbers"; // Negative numbers don't have a factorial

  let result = 1; // Factorial of 0 or 1 is 1
  for (let i = 1; i <= num; i++) {
    result *= i; // Multiply result by each number from 1 to num
  }
  return result;
};

console.log(factorial(7)); // Output: 5040
console.log(factorial(-3)); // Output: "Factorial is not defined for negative numbers"

//Recursive approach
const factorialRecursive = (num) => {
  if (num < 0) return "Factorial is not defined for negative numbers"; // Factorial not defined for negative numbers
  if (num === 0 || num === 1) return 1; // Base case: 0! = 1 and 1! = 1
  return num * factorialRecursive(num - 1); // Recursively multiply num by (num - 1)!
};

console.log(factorialRecursive(5)); // Output: 120
console.log(factorialRecursive(-3)); // Output: "Factorial is not defined for negative numbers"

/**
 * Function to check if a number is prime.
 *
 * @param {number} num The number to check for primality.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
function isPrime(num) {
  // Check if the number is less than 2 (1 and negative numbers aren't prime)
  if (num <= 1) {
    return false;
  }

  // Only check divisibility up to the square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // num is divisible by i, so it's not prime
    }
  }

  return true; // num is prime
}

// Example usage
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

//check fibonacci number
const fibonacci = (() => {
  // Memoization object to store computed Fibonacci values
  const memo = {};

  // Recursive function with memoization
  const fib = (n) => {
    // Base cases
    if (n <= 1) return n;

    // Check if the value is already computed
    if (memo[n] !== undefined) return memo[n];

    // Calculate Fibonacci value and store it in memo
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  };

  // Function to return the full Fibonacci sequence up to a given number
  return (num) => {
    const sequence = [];
    for (let i = 0; i <= num; i++) {
      sequence.push(fib(i)); // Push Fibonacci number at each step
    }
    return sequence;
  };
})();

//array to find maximum number
function findMaxNumber(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

//
