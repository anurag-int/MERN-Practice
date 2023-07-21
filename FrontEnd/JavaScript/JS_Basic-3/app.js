console.log("Hello World");


console.log(Math.random());

console.log(Math.max(1,6,2,53,54));

// normal string
let lastname = 'Gupta';

// string object
let firstName = new String("Anurag");

// some function of string in Js
// firstName.startWith('A');
// .endsWith('A);'
// indexOf('u);
// .toUpperCase();
// .toLowerCase();
// .trim();
// .replace('A','R'); 
//.message.split(' ');


let message = 'This is my first Message';
let words = message.split(' ');
console.log(words);


// Template Litral:  


let new_message = "This is \n my Second \n Message";
console.log(new_message);

let date2 = new Date();
console.log(date2);

let numbers = [1,2,3,5,6,7,6];
console.log(numbers.length);

// push in the last of the array
numbers.push(100);
console.log(numbers);


// push in the starting
numbers.unshift(101);
console.log(numbers);


// push in the middle of the Array
numbers.splice((numbers.length-1)/2, 0, 1000 )
console.log(numbers);


let courses = [
    {no:1, name:'Anurag'},
    {no:2, name:'Gupta'}
];

console.log(typeof courses);

let ans = courses.find((course) => {
    return (course.no === 1)
});

console.log(ans);


// Removing the element

// from the end
var arr = [1,2,3,4,5,6,7,8];
arr.pop();
console.log(arr);

// from the beginning
var arr = [1,2,3,4,5,6,7,8];
arr.shift();
console.log(arr);

// from the middle 
var arr = [1,2,3,4,5,6,7,8]; // suppose I want to delete 6 (Index no - 5)
arr.splice(5,1);
console.log(arr);


var number = [1,2,3,4,5];
console.log(typeof number);
var temp_arr = number;
number = [];
console.log(typeof temp_arr);


//Emptying An Array


var number = [1,2,3,4,5];

// method 1  ---> .length = 0
number.length = 0;
console.log(number);

// method 2 -----> from splice method
var number = [1,2,3,4,5,6];
number.splice(0, number.length);
console.log(number);

// method 3


var number = [1,2,3,4,5,6];

while(number.length > 0)
{
    number.pop();
}
console.log(number);





// Combining and slicing
var no1 = [1,2,3];
var no2 = [4,5,6];
var combined = no1.concat(no2);
console.log(combined);


// Iterating in Array

var arr = [1,2,3,4,5,6,43,43];

for(let i = 0;i<arr.length;i++)
{
    console.log(arr[i]);
}


arr.forEach((number)=>{
    console.log(number);
});



// joining in array
var no = [1,5,23,5];
var joined = no.join('');
var ans1 = joined + 1;
console.log(typeof ans1);


// spliting in string
var message1 = "This is my First Message";
var parts = message1.split(' ');

// this will create array
console.log(parts);

var joined = parts.join(' ')
console.log(joined);


// sorting an array

var items = [6,3,2,52,72];
items.sort();
console.log(items);


// filered function in Js

let noss = [1,2,-1,-4];
let filered = noss.filter((value)=>{
    return value > 0;
});
console.log(filered);



// mapping in JS

let ar = [7,8,9,10];
console.log(no);

let items_list = ar.map((value)=>{
    return 'studentno ' + value;
});

console.log(items_list);


// Mapping with Objects

var number = [1,2,-1,-5];

var filtered = number.filter((value)=>{
    return (value > 0);
});

var items = filered.map((num)=>{
    return {value:num};
});

console.log(items);

// can be also written like this -----> chanin

var number = [1,2,-1,-5];


var filtered =  number.filter(value=>(value > 0));


var items = number

    .filter(value=>(value > 0))
    .map((num)=>{
    return {value:num};
});

console.log(items);






var no = [1,2,3,4,5];
no.length = 0;
console.log(typeof no);


var items = [6,3,2,52,72];
var sorted = items.sort((value)=>{
    return parseInt(value);
});

console.log(sorted);




var list_items = [];
function sum(...args)
{
    console.log(args);
    
}


sum(1,2,3,4,5,6,7);
console.log(list_items);


var a = 1;
console.log(a);
a = 'a';
console.log(a);





// Getter And Setter To read the value and update the value.
var person = {
    fName : 'Anurag',
    lName : 'Gupta',
    get fullName(){
        console.log(typeof fullName);
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

person.fullName = 'Rahul Kumar';
console.log(person.fullName);


console.log(person.fName);
console.log(person.lName);






//  try catch 
// var person = {
//     fName : 'Anurag',
//     lName : 'Gupta',
//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value){
//         if(typeof value !== String){
//             throw new Error("You have not send a String");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };


// try{
//     person.fullName = true;
// }
// catch(e){
//     alert(e);
// }
// console.log(person.fullName);

const ab = 5;
function hello()
{
    const ab = 'hello';
}

console.log(ab);


// reducing an array  ---> doing sum of the array elements

var arr = [1,2,3,4,5];

var total_sum = arr.reduce((ans,value) => ans + value, 0);
console.log(total_sum);


var items = [6,3,2,52,72];


items.sort((a,b) => a - b);
console.log(items);

