//create a simple promise
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetch successfully");
//     }, 2000);
//   });
// };

/**
 * 
 
fetchData()
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
*/

//How do you handle errors in promises?
/**
fetchData()
  .then((result) => {
    throw new Error("Simulated error"); // Force an error for demonstration
  })
  .catch((error) => console.error("Error caught:", error))
  .finally(() => console.log("Operation completed."));
 */

//How can How does Promise.all() work?
// const promise1 = Promise.resolve("First Promise Resolve");
// const promise2 = Promise.resolve("Second Promise Resolve");

// Promise.all([promise1, promise2])
//   .then((result) => console.log("all promised resolve"))
//   .catch((err) => console.log(err));

/**
 * output:All promise resolve
 */

//What is the difference between Promise.all() and Promise.allSettled()
// const p11 = Promise.resolve("Success");
// const p22 = Promise.reject("Error");
// const p33 = Promise.resolve("Another success");

//Promise.allSettled([p11, p22, p33]).then((results) => console.log(results));
/**
 * Output
 * all promised resolve
[
  { status: 'fulfilled', value: 'Success' },
  { status: 'rejected', reason: 'Error' },
  { status: 'fulfilled', value: 'Another success' }
]
 */

//"Promise.race() returns the result of the first promise that settles (either resolved or rejected)."
// const p1 = new Promise((resolve) =>
//   setTimeout(() => resolve("Fast promise"), 1000)
// );
// const p2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Slow promise"), 2000)
// );

//Promise.race([p1, p2]).then((result) => console.log(result)); // Outputs: Fast promise

//Rewrite a promise-based function using async/await

// fetchData()
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// async function name() {
//   try {
//     // const result = await fetchData();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }
// name();

//"JavaScript does not support built-in promise cancellation, but we can simulate it using AbortController in fetch requests:"
const controller = new AbortController();
const signal = controller.signal;

fetch("https://jsonplaceholder.typicode.com/posts", { signal })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    if (error.name === "AbortError") {
      console.error("Fetch request cancelled");
    }
  });

// Cancel the fetch after 1 second
setTimeout(() => controller.abort(), 1000);

//Write a custom promise that simulates a task. If the task completes in less than 3 seconds, resolve with a success message; otherwise, reject with a timeout error.
const simulateTask = (duration) => {
  return new Promise((resolve, reject) => {
    if (duration < 3000) {
      setTimeout(() => {
        resolve(`Task completed in ${duration}ms`);
      }, duration);
    } else {
      setTimeout(() => {
        reject(new Error("Task timeout: took too long"));
      }, duration);
    }
  });
};

// Simulating tasks
simulateTask(2000)
  .then((message) => console.log(message))
  .catch((error) => console.error(error.message));

simulateTask(4000)
  .then((message) => console.log(message))
  .catch((error) => console.error(error.message));

//"Imagine you are fetching data from an API. If the request takes longer than 5 seconds, you want to cancel it and log a timeout error. How would you achieve that using promises?"
const fetchDataWithTimeout = (url, timeoutDuration) => {
  // Create a fetch request promise
  const fetchPromise = fetch(url)
    .then((response) => response.json())
    .then((data) => console.log("Data fetched:", data))
    .catch((err) => console.error("Fetch error:", err));

  // Create a timeout promise
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out!")), timeoutDuration)
  );

  // Race the two promises
  return Promise.race([fetchPromise, timeoutPromise]).catch((error) =>
    console.error("Result:", error.message)
  );
};

// Example usage
fetchDataWithTimeout("https://jsonplaceholder.typicode.com/posts", 5000);
