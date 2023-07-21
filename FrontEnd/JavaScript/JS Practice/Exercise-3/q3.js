// Write a function that uses async/await to make an API call to fetch data and returns a promise with the response.

async function fun(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        
        return data;
    }
    catch(error){
        return Promise.reject(error);
    }
}


let url = 'https://jsonplaceholder.typicode.com/posts/1';
fun(url).then((data)=>{
    
    console.log(data);
})
.catch((error)=>{
    console.error(error);
})




// Explanation:

// - The `fetchData` function is declared using the `async` keyword, which means it will return a promise.
// - The function takes a `url` parameter which specifies the URL of the API to fetch data from.
// - Inside the function, a `try-catch` block is used to handle any errors that may occur during the API call.
// - `await` is used to wait for the response from the server and for the JSON data from the response.
// - If the API call is successful, the data is returned as a resolved promise using the `return` statement.
// - If an error occurs, the error is returned as a rejected promise using the `Promise.reject()` method.
// - The `fetchData` function can be called with the desired API URL as an argument and then can be chained with `.then()` and `.catch()` methods to handle the resolved and rejected promises respectively.

// Note:

// - The `fetch()` method is used to make an API call to fetch data from a server. It returns a promise that resolves with the `Response` object representing the response to the request.
// - The `.json()` method is used to parse the JSON data from the response and return a promise that resolves with the parsed data.