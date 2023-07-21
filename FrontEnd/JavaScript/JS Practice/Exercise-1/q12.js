// Write a function to simulate an asynchronous delay using a callback.

function simulateDelay(delay, callback)
{
    setTimeout(callback, delay);
}

console.log("Before Delay");

simulateDelay(2000, ()=>{
    console.log("After Delay")
});

console.log("Function finished executing");

//output

// Before Delay
// Function finished executing
// After Delay








// - The `simulateDelay` function takes two arguments: the delay time in milliseconds and a callback function to execute after the delay has completed.
// - Inside the function, `setTimeout` is used to delay the execution of the callback function for the specified amount of time.
// - The callback function is executed once the delay has completed.
// - In the example usage, the console logs demonstrate that the function continues to execute while the delay is happening, and the callback function executes after the delay has completed.

// Note:

// - This function is a basic example of simulating an asynchronous delay using callbacks. In real-world situations, it may be more appropriate to use Promises or async/await syntax for more robust handling of asynchronous operations.