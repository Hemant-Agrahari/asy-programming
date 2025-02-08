// Example:

function curriedMultiply(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a * b * c * d;
      };
    };
  };
}

// Usage:
const result = curriedMultiply(2)(3)(4)(5);
console.log(result); // 120 (2 * 3 * 4 * 5)
