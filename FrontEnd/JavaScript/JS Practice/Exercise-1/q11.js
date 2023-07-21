// Write a function to fetch data from an API using the Fetch API and handle the response with a callback.


function fetchData(url, callback)
{
    fetch(url)
    .then(Response => Response.json)
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
    
}
fetchData('https://jsonplaceholder.typicode.com/todos/1', (error, data)=>{
    if(error)
        console.log(error);
    else;
        console.log(data);
});






// Explanation:

// - The function `fetchData` takes two arguments: `url` and `callback`.
// - It uses the Fetch API to make a GET request to the specified URL.
// - If the request is successful, the response is converted to JSON format and passed to the callback function along with a `null` error value.
// - If the request fails, the error is passed to the callback function along with a `null` data value.
// - The example usage demonstrates how to call the `fetchData` function and handle the response with a callback function.
// - In this example, the `fetchData` function is used to fetch data from the JSONPlaceholder API for a single to-do item and log it to the console.

// Note:

// - The Fetch API is built into modern web browsers and allows developers to make HTTP requests to servers using JavaScript.




