// Write a function that returns a promise which resolves after a specified number of milliseconds.


console.log("Before");
let prom = (dealay) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Promise Resolved");
            resolve();
        }, dealay);
    });
}

prom(2000).then(()=>{
    console.log("2 second elapsed");
});

console.log("After")


//output
// Before
// After
// Promise Resolved
// 2 second elapsed







// Explanation:

// - The `delay` function takes in a number of milliseconds as an argument and returns a Promise object.
// - Within the Promise object, `setTimeout` is used to delay the execution of the `resolve` function by the specified number of milliseconds.
// - Once the delay is complete, the Promise is resolved.
// - In the test case, we call `delay` with 2000 milliseconds (or 2 seconds) and then output "2 seconds elapsed" to the console once the Promise is resolved.

// Note: The `delay` function can be used to simulate a delay in an asynchronous function call.