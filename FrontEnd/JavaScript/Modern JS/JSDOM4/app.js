// Example of Syncronous Code.

        // function sync()
        // {
        //     console.log('First');
        // }
        // sync();

        // console.log('Second');





// Example of Asyncronous Code.

        // setTimeout(function(){
        //     console.log('third');
        // },3000);

        // function sync(){
        //     console.log('First');
        // }

        // sync();

        // console.log('Second');


// Promise

        //Example - 1

        // let meraPromise = new Promise(function()
        // {
        //     console.log("I am inside Promise");
        // });

        // console.log(typeof meraPromise);


//Example - 2 ---> for Fullfill use resolve(--any no---), and for rejection use reject(new Error("Failed Message"))


                // let meraPromise1 = new Promise(function(resolve, reject){
                //     setTimeout(function(){
                //         console.log('I am inside Promise1');
                //     }, 5000);
                //     // resolve(1831);
                //     // reject(new Error('Bhaisahab Error aaye hai'));

                    
                // });
                //     meraPromise1.then((value) => {console.log(value)});

                //     meraPromise1.catch((error)=>{
                //         console.log("Received an Error");
                //     });



// Example - 3  Most Important Example **************************************************************


    // let promise1 = new Promise(function(resolve, reject){
    //     setTimeout(()=>{
    //         console.log('I am in Promise 1');
    //     }, 2000);
    //     resolve(true);
    // })

    // let output = promise1.then(() => {
    //     let promise2 = new Promise(function(resolve, reject){
    //         setTimeout(() => {
    //             console.log('I am Promise 2');
    //         },3000);
    //     resolve("Promise 2 Full Filled");
        
    //     });
    //     return promise2;
    // })

    // output.then((value) => console.log(value));





// Async and Await



// async function always return Promise
    // async function abcd(){
        
    //     return 7;
    // }
    // abcd();



// async  Example

    // async function weather()
    // {
    //     let mumbai = new Promise((resolve, reject) => {
    //         setTimeout(()=>{
    //             resolve("Mumbai me bhot Humidity hai")
    //         },1000);
    //     });
        
        
    //     let banglore = new Promise((resolve, reject) => {
    //         setTimeout(()=>{
    //             resolve("Banglore is cool");
    //         },5000);
    //     });


    //     let mb = mumbai;
    //     let bng = banglore;

    //     return [mb, bng];

    // }

    // weather();


// fetch API
// Used JSONPlaceHolder --> is a fake API ---------> (get request)

        // async function Utility() {
            
        // let API_Url = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        // // let output = await API_Url.json();
        // let output = API_Url.json();
        // console.log(output);

        // };

        // Utility();



// Post Request API call


async function helper()
{

let options = {
    method: 'POST',
    body: JSON.stringify({
    title: 'Content',
    body: 'Fit Body',
    userId: 1831,
    weight: "60kg"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
};


// Note : In Network Always use await (good Practice)
        let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);

        let response = content.json();
        return response;
      }

      async function utility() {
          let ans = await helper();
          console.log(ans);
      }

      utility();






// Closures

// let  is a -> block scope


// ex - 1
function init() {
    let name = "Mozilla"; 
    function displayName() {
      let name = "Anurag";
      console.log(name);
    }
    displayName();
  }
  init();





// ex - 2
  function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
      return name;
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  let data = myFunc();
  console.log(data);



// ex - 3
function x(){
  var a = 5;
  function y(){
    console.log(a);
  }
  return y;
}

var z = x();
z();




// ex - 4
function x(){
  var a = 7;
  function y(){
    console.log(a);
  }
  a = 100;
  return y;
}
var z = x();
console.log(z);



































        
         
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        


        
        

 

