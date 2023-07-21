// Write a function that returns a promise which rejects with a specified error message after a specified number of milliseconds.


let prom = (delay) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("Rejected");
        },delay);
    })
}

prom(2000).catch((error)=>{
    console.error(error);
});





//output
//rejected



// Explanation:

// - The `delay` function takes in a number of milliseconds as an argument and returns a Promise object.
// - Within the Promise object, `setTimeout` is used to delay the execution of the `resolve` function by the specified number of milliseconds.
// - Once the delay is complete, the Promise is resolved.
// - In the test case, we call `delay` with 2000 milliseconds (or 2 seconds) and then output "2 seconds elapsed" to the console once the Promise is resolved.

// Note: The `delay` function can be used to simulate a delay in an asynchronous function call.