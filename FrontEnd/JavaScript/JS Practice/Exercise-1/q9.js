// Write a function that takes an array of objects and returns an array of all the values of a specified property name.

const people = [
    { name: "Pranay", age: 20, gender: "male" },
    { name: "Nidhi", age: 21, gender: "female" },
    { name: "Soumya", age: 21, gender: "male" },
  ];

let myFun = function keysOfObject(arr, propName)
            {
                const values = arr.map((obj) => obj[propName]);

                return values;
            }

console.log(myFun(people, "name"));
console.log(typeof myFun);

// output ---> [ 'Pranay', 'Nidhi', 'Soumya' ]