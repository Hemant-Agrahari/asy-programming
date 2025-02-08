console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 1000);

console.log("End");

// "Start" and "End" are logged immediately because they are synchronous.
//setTimeout is asynchronous, so it gets offloaded to Web APIs and its callback is placed in the callback queue.
//After 1 second, the event loop picks the callback from the queue and adds it to the call stack, where it gets executed.
