console.log("let's start");
 
//creating object. from Factory Function


function createRectangle(){
    const rectangle = {
        length: 1,
        breadth: 2,
        draw(){
            console.log("Drawing rectangle");
            console.log(typeof(rectangle));
        }
    };
    return rectangle;
}

// creating object using factory function
let obj1 = createRectangle();
console.log(obj1.length);
console.log();

obj1.draw();







// creating object from constructor Function

// function Rectangle(len, bre){
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function()
//     {
//         console.log("Drawing");
//     }
// }

// // now object creation using Constructor Function
// let rectangeOBJ = new Rectangle(5,8);
// console.log(rectangeOBJ.breadth);

// console.log(typeof(rectangeOBJ));



// function ObjectCreation()
// {
//     this.l = 1;
//     this.b = 2;
// }

// let newOBJ = new ObjectCreation();
// console.log(newOBJ.l);
// console.log(newOBJ.b);
// newOBJ.a = 10;
// console.log(newOBJ.a);

// let newOBJ1 = new ObjectCreation();
// console.log(newOBJ1.l);
// console.log(newOBJ1.b);
// console.log(newOBJ1.C);

let obj2 = new ObjectCreation();

function ObjectCreation()
{
    this.l = 1;
    this.b = 2;
}
obj2.color = "Blue";
console.log(obj2.l);


let rect = new Function(
    `
    this.l = 1;
    this.b = 2;
    `
);


let a = 10;
inc(a);
function inc(a)
{
    a++
}
console.log(a);

let b = {value:10};
inc(b);
function inc(b)
{
    b.value++;
}
console.log(b.value);



// For-in
let person = {
    value:1,
    swim(){console.log("I can Swim");},
    Write(){console.log("I can write");},
    read(){console.log("I can read");},
    write(){console.log("I can read");}
};

for(let key in person)
{
    console.log(key,person[key]);
}



// for -out loop works with iterabls ----> Arrays, Map

if('swim' in person)
    console.log("Present");
else   
    console.log("Absent");



    // cloning the object  :-


    // . Iteration
    // . Assign
    // . Spread

// from iteration ---> method 1

let src = {value:10, a:1, b:100};
let dest = {};
for(let key in src)
{
    dest[key] = src[key];
}



for(let key in dest)
{
    console.log(dest[key]);
}





// method 2 by Assign Function


// let src = {value:10, a:1, b:100};
// let dest = Object.assign({},src);





// method 3 by Spread ...


// let src = {value:10, a:1, b:100};
// let dest = {...src}; 















